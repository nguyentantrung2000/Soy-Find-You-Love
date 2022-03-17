import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Component, OnInit, Input, OnChanges, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { Participant } from 'src/models/participant_chat.model';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.scss']
})
export class RoomChatComponent implements OnInit, OnChanges, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  @Input() conversation: any;
  @Input() otherUserInfo !: Participant;

  showEmojiPicker = false;

  displayName: String = '';
  message: String = '';
  constructor(public login: LoginGGService) {
  }

  date = Date.now().toString();
  ngOnInit(): void {
    this.scrollToBottom();
  }

  ngOnChanges(): void {
    var temp = this.otherUserInfo.displayName.trim().split(' ')
    if (temp.length > 2) {
      this.displayName = `${temp[0]} ${temp[1]}`;
    } else {
      this.displayName = this.otherUserInfo?.displayName;
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  onSubmit() {
    var temp = {
      id: this.login.user?.uid, body: this.message, time: this.date,
    }
    this.conversation.conDetail.messages.push(temp);
    this.message = "";
  }

  onEnter(msg: string) {
    console.log(msg)
    var temp = {
      id: this.login.user?.uid, body: msg, time: this.date,
    }
    this.conversation.conDetail.messages.push(temp);
    this.message = "";
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
