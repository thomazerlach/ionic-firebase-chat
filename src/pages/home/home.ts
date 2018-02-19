import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Chat } from '../../models/chat.model';
import { User } from './../../models/user.model';

import { AuthProvider } from './../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { ChatProvider } from '../../providers/chat/chat';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chats: Observable<Chat[]>;
  users: Observable<User[]>;
  view: string = 'chats';

  constructor(
    public navCtrl: NavController,
    public authService: AuthProvider,
    public chatService: ChatProvider,
    public menuCtrl: MenuController,
    public userService: UserProvider
  ) {

  }

  ionViewCanEnter(): Promise<boolean>{
   return this.authService.authenticated;
  }
  
  ionViewDidLoad(){
    this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
      .map((chats: Chat[]) => chats.reverse());
    this.users = this.userService.users;

    this.menuCtrl.enable(true, 'user-menu');
  }

  filterItems(event: any): void {
    let searchTerm: string = event.target.value;
    
    this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
      .map((chats: Chat[]) => chats.reverse());
    this.users = this.userService.users;

    if (searchTerm) {

      switch(this.view) {

        case 'chats':
          this.chats = this.chats
            .map((chats: Chat[]) => chats.filter((chat: Chat) => (chat.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)));
          break;

        case 'users':
          this.users = this.users
            .map((users: User[]) => {
              return users.filter((user: User) => {
                return (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
              });
            });
          break;

      }

    }
    
  }

  onChatCreate(recipientUser: User): void {
    
    this.userService
      .mapObjectKey<User>(this.userService.currentUser)
      .first()
      .subscribe((currentUser: User) => {

        this.chatService
          .mapObjectKey<Chat>(this.chatService.getDeepChat(currentUser.$key, recipientUser.$key))
          .first()
          .subscribe((chat: Chat) => {
            
            if (!chat.title) {

              let timestamp: Object = firebase.database.ServerValue.TIMESTAMP;

              let chat1 = new Chat('', timestamp, recipientUser.name, '');
              this.chatService.create(chat1, currentUser.$key, recipientUser.$key);

              let chat2 = new Chat('', timestamp, currentUser.name, '');
              this.chatService.create(chat2, recipientUser.$key, currentUser.$key);

            }

          });

      });

    this.navCtrl.push('ChatPage', {
      recipientUser: recipientUser
    });
    
  }

  onChatOpen(chat: Chat): void {

    let recipientUserId: string = chat.$key;
    this.userService.mapObjectKey<User>(
      this.userService.getUser(recipientUserId)
    )
      .first()
      .subscribe((user: User) => {
        this.navCtrl.push('ChatPage', {
          recipientUser: user
        });
      });

  }

  onSignup(): void {
    this.navCtrl.push('SignupPage');
  }

}
 