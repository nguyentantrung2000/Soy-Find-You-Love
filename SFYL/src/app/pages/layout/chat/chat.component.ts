import { Component, EventEmitter, OnInit,Output } from '@angular/core';

import { UserChatService } from 'src/app/services/user-chat.service';
import { User_chat } from 'src/models/user_chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // value1 = '';
  public conversation !: any;
  public arr!: Array<User_chat>
  
  constructor(public userChatService:UserChatService){}
  
  onConversationSelected(conversation: any){
    this.conversation = conversation;
  }

  ngOnInit(): void {
  }

}
