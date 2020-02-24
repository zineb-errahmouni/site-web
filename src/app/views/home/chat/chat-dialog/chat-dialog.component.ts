import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {Observable} from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  providers : [ChatService],
  styleUrls: ['./chat-dialog.component.css']
})
export class ChabotDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  val: string;


  constructor(private chat: ChatService) { }


  ngOnInit(): void {
   this.messages = this.chat.conversation.asObservable()
     .pipe(
       scan((acc, val) => acc.concat(val)
     ));
  }

  sendMessage() {
    this.chat.converse(this.val);
    this.val = '';
  }

}
