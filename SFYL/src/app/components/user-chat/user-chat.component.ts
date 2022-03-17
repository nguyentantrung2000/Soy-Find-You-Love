import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { User_chat } from 'src/models/user_chat.model';
@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
  @Input() conversation: any;
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  userChat: User_chat = {
    displayName: '',
      photoURL: '',
      time: '',
      messageRead: false,
      latestMess: '',
      messages: []
  };

  constructor() {}

  ngOnInit(): void {
    this.getDetailsConver();
  }

  public async getDetailsConver() {
    let converMessage = this.conversation.conDetail.messages;
    this.userChat = {
      displayName: '',
      photoURL: '',
      time: converMessage[converMessage.length -1].time,
      messageRead: false,
      latestMess: converMessage[converMessage.length -1].mess,
      messages: []
    }
  }
}
