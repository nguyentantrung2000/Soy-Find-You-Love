import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { Participant } from 'src/models/participant_chat.model';
import { User } from 'src/models/user.model';
import { User_chat } from 'src/models/user_chat.model';
@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit {
  @Input() conversation: any;
  @Input() otherUserInfo: any;
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  userChat: User_chat = {
    displayName: '',
    photoURL: '',
    time: '',
    messageRead: false,
    latestMess: '',
    messages: [],
  };

  otherUser: Participant = {
    displayName: '',
    photoURL: '',
  };

  constructor(public login: LoginGGService, public http: HttpClientService) {}

  ngOnInit(): void {
    this.getDetailsConver();
    this.getParticipantInfo();
  }

  public async getDetailsConver() {
    let converMessage = this.conversation.conDetail.messages;
    console.log(converMessage)
    this.userChat = {
      displayName: '',
      photoURL: '',
      time: converMessage[converMessage.length - 1].time,
      messageRead: false,
      latestMess: converMessage[converMessage.length - 1].mess,
      messages: [],
    };
    console.log(converMessage[converMessage.length - 1].time)
  }

  public async getParticipantInfo() {
    let participants = this.conversation.conDetail.participants;
    let participant_Info;
    participants[0] != this.login.user?.uid
      ? (participant_Info = participants[0])
      : (participant_Info = participants[1]);
    await this.http.UserWithId(participant_Info).subscribe((data) => {
      let temp = data as User;
      console.log(temp)
      this.otherUser = {
        displayName: temp.name,
        photoURL: temp.photoURL,
      };
      console.log(this.otherUser.displayName)
    });
  }
}
