import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { doc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { docData } from 'rxfire/firestore';
import { HttpClientService } from 'src/app/services/http-client.service';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { Participant } from 'src/models/participant_chat.model';
import { User } from 'src/models/user.model';
import { User_chat } from 'src/models/user_chat.model';

interface LastestMess {
  mess: String;
  time: String;
  messageRead: boolean;
}

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit, OnChanges {
  @Input() conversation: any;
  @Input() otherUserInfo: any;
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  lastestMess: LastestMess = {
    mess: '',
    time: '',
    messageRead: false,
  };
  
  otherUser: Participant = {
    displayName: '',
    photoURL: '',
  };

  public listMessage: Array<any> = [];

  constructor(
    public login: LoginGGService,
    public http: HttpClientService,
    public firestore: Firestore
  ) {}
  ngOnChanges(): void {
    // this.getDetailsConver();
    this.getParticipantInfo();
    onSnapshot(
      doc(this.firestore, 'Conversations', this.conversation.conId),
      (doc) => {
        let temp = doc.data();
        this.listMessage = temp!['messages'];
        this.lastestMess = {
          mess: this.listMessage[this.listMessage.length - 1].mess,
          time: this.listMessage[this.listMessage.length - 1].time,
          messageRead: false,
        };
      }
    );
  }

  ngOnInit(): void {
    // this.getDetailsConver();
    this.getParticipantInfo();
    onSnapshot(
      doc(this.firestore, 'Conversations', this.conversation.conId),
      (doc) => {
        let temp = doc.data();
        this.listMessage = temp!['messages'];
      }
    );
  }

  // public async getDetailsConver() {
  //   let converMessage = this.listMessage;
  //   console.log(converMessage)
  //   this.userChat = {
  //     displayName: '',
  //     photoURL: '',
  //     time: converMessage[converMessage.length - 1].time,
  //     messageRead: false,
  //     latestMess: converMessage[converMessage.length - 1].mess,
  //     messages: [],
  //   };
  // }

  public async getParticipantInfo() {
    let participants = this.conversation.conDetail.participants;
    let participant_Info;
    participants[0] != this.login.user?.uid
      ? (participant_Info = participants[0])
      : (participant_Info = participants[1]);
    await this.http.UserWithId(participant_Info).subscribe((data) => {
      let temp = data as User;
      let tempName = temp.name.trim().split(' ');
      if (tempName.length > 2) {
        temp.name = `${tempName[0]} ${tempName[1]}`;
      } 
      this.otherUser = {  
        displayName: temp.name,
        photoURL: temp.photoURL,
      };
    });
  }
}
