import { Component, OnInit,Input } from '@angular/core';
import { User_chat } from 'src/models/user_chat.models';
@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
  @Input() userChat !: User_chat;

  constructor() { }

  ngOnInit(): void {
  }

}
