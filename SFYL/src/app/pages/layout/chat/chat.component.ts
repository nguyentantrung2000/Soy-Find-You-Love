import { Component, EventEmitter, OnChanges, OnInit,Output, SimpleChanges } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';

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
  public otherUserInfo !: any;
  public arr!: Array<User_chat>
  
  constructor(public userChatService:UserChatService, public login: LoginGGService){}
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.userChatService.getConverList();
  // }
  
  onConversationSelected(conversation: any){
    this.conversation = conversation.conversation;
    this.otherUserInfo = conversation.otherUserInfo;
    console.log(conversation.conversation)
  }

  ngOnInit(): void {
    this.userChatService.getConverList(this.login.user?.uid);
  }

}
