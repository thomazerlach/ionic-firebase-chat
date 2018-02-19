import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

import { BaseService } from '../base.service';
import { Message } from '../../models/message.model';

import firebase from 'firebase';

@Injectable()
export class MessageProvider extends BaseService {

  constructor(public db: AngularFireDatabase) {
    super();
  }

  create(message: Message, listMessages: AngularFireList<Message>): Promise<void> {
    return Promise.resolve(listMessages.push(message));
  }

  getMessages(userId1: string, userId2: string): AngularFireList<Message> {
    return this.db.list(`/messages/${userId1}-${userId2}`, 
      (ref: firebase.database.Reference) => ref.limitToLast(30).orderByChild('timestamp')
    );
  }

}
