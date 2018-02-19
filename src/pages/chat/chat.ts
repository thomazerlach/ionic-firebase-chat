import { Observable } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

import { AngularFireList, AngularFireObject } from 'angularfire2/database';

import { AuthProvider } from './../../providers/auth/auth';
import { ChatProvider } from '../../providers/chat/chat';
import { MessageProvider } from '../../providers/message/message';
import { UserProvider } from '../../providers/user/user';

import { Chat } from './../../models/chat.model';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;

  messages: AngularFireList<Message>;
  viewMessages: Observable<Message[]>;
  newMessage: string;

  pageTitle: string;
  sender: User;
  recipient: User;

  private chat1: AngularFireObject<Chat>;
  private chat2: AngularFireObject<Chat>;

  constructor(
    public authService: AuthProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public chatService: ChatProvider,
    public messageService: MessageProvider,
    public userService: UserProvider
  ) {
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.recipient = this.navParams.get('recipientUser');
    this.pageTitle = this.recipient.name;
    this.userService
      .mapObjectKey<User>(this.userService.currentUser)
      .first()
      .subscribe((currentUser: User) => {
        this.sender = currentUser;

        this.chat1 = this.chatService.getDeepChat(this.sender.$key, this.recipient.$key);
        this.chat2 = this.chatService.getDeepChat(this.recipient.$key, this.sender.$key);

        if (this.recipient.photo) {
          this.chat1
            .valueChanges()
            .first()
            .subscribe((chat: Chat) => {
              this.chatService.updatePhoto(this.chat1, chat.photo, this.recipient.photo);
            });
        }

        let doSubscription = () => {
          this.viewMessages = this.messageService.mapListKeys<Message>(this.messages);
          this.viewMessages
            .subscribe((messages: Message[]) => {
              this.scrollToBottom();
            });
        }

        this.messages = this.messageService
          .getMessages(this.sender.$key, this.recipient.$key);

        this.messages
          .valueChanges()
          .first()
          .subscribe((messages: Message[]) => {

            if (messages.length === 0) {
              this.messages = this.messageService
                .getMessages(this.recipient.$key, this.sender.$key);

              doSubscription();

            } else {
              doSubscription();
            }

          });

      });
  }

  sendMessage(newMessage: string): void {

    if (newMessage) {

      let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;

      this.messageService.create(
        new Message(
          this.sender.$key,
          newMessage,
          currentTimestamp
        ),
        this.messages
      ).then(() => {

        this.chat1.update({
          lastMessage: newMessage,
          timestamp: currentTimestamp
        });

        this.chat2.update({
          lastMessage: newMessage,
          timestamp: currentTimestamp
        });

      });

    }

  }

  private scrollToBottom(duration?: number): void {
    setTimeout(() => {
      if (this.content) {
        this.content.scrollToBottom(duration || 300);
      }
    }, 50);
  }

  /*doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      
      this.messageService.moreMessages();
      this.ionViewDidLoad();

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 300);
  }*/

}
