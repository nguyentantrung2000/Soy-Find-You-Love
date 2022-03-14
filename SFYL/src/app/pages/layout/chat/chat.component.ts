import { Component, OnInit } from '@angular/core';
import { UserCharService } from 'src/app/services/user-char.service';
import { User_chat } from 'src/models/uset_chat.models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  value1 = '';
  public arr!: Array<User_chat>
  constructor(
    public userChatService:UserCharService
  ) { }
 
  ngOnInit(): void {
  }

}
