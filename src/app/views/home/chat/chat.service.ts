import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';

import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {BehaviorSubject} from 'rxjs';


export class Message {
  constructor(public content: string, public  sentBy: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({accessToken : this.token});

  conversation = new BehaviorSubject<Message[]>([]);



  talk() {
    this.client.textRequest('who are you')
    .then(res => console.log(res));
  }

  constructor() { }

  updateMessage(message: Message) {
    this.conversation.next([message]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.updateMessage(userMessage);
    return this.client.textRequest(msg)
      .then(res => {
         const speech = res.result.fulfillment.speech;
         const botMessage = new Message(speech, 'bot');
         this.updateMessage(botMessage);
      });

  }

}
