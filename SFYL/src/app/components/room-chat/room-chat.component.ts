import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterViewChecked,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { doc, docData, Firestore, onSnapshot } from '@angular/fire/firestore';
import { ChatService } from 'src/app/services/chat.service';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { Participant } from 'src/models/participant_chat.model';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.scss'],
})
export class RoomChatComponent implements OnInit, OnChanges, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  @Input() conversation: any;
  @Input() otherUserInfo!: Participant;
  public listMessage: Array<any> = [];
  showEmojiPicker = false;

  displayName: String = '';
  message: String = '';
  constructor(
    public login: LoginGGService,
    public chat: ChatService,
    public firestore: Firestore
  ) {}

  date = Date.now().toString();
  ngOnInit(): void {
    // this.listMessage = this.conversation.conDetail;
    onSnapshot(
      doc(this.firestore, 'Conversations', this.conversation.conId),
      (doc) => {
        let temp = doc.data();
        this.listMessage = temp!['messages'];
      }
    );

    this.scrollToBottom();
  }

  ngOnChanges(): void {
    var temp = this.otherUserInfo.displayName.trim().split(' ');
    if (temp.length > 2) {
      this.displayName = `${temp[0]} ${temp[1]}`;
    } else {
      this.displayName = this.otherUserInfo?.displayName;
    }
    onSnapshot(
      doc(this.firestore, 'Conversations', this.conversation.conId),
      (doc) => {
        let temp = doc.data();
        this.listMessage = temp!['messages'];
      }
    );
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  onSubmit() {
    var temp = {
      id: this.login.user?.uid,
      mess: this.message,
      time: this.date,
    };
    let tempMess = this.chat.sendMess(this.conversation.conId, temp);
    this.listMessage.push(temp);
    this.message = '';
  }

  onEnter(msg: string) {
    if (msg != '') {
      var temp = {
        id: this.login.user?.uid,
        mess: msg,
        time: this.date,
      };
      let tempMess = this.chat.sendMess(this.conversation.conId, temp);
      this.listMessage.push(temp);
      this.message = '';
    }
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    const { message } = this;
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    this.showEmojiPicker = false;
  }
}
