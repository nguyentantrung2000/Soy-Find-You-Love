import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Component, OnInit, Input, OnChanges, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.scss']
})
export class RoomChatComponent implements OnInit, OnChanges, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  @Input() conversation: any;
  showEmojiPicker = false;

  displayName = '';
  message = '';
  constructor() {
  }

  date = Date.now().toString();
  ngOnInit(): void {
    this.scrollToBottom();
  }

  ngOnChanges(): void {
    var temp = this.conversation.displayName.trim().split(' ')
    if (temp.length > 2) {
      this.displayName = `${temp[0]} ${temp[1]}`;
    } else {
      this.displayName = this.conversation.displayName;
    }
    console.log(this.conversation.messages);
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
      id: "2", body: this.message, time: this.date,
    }
    this.conversation.messages.push(temp);
    this.message = "";
  }

  onEnter(msg: string) {
    var temp = {
      id: "2", body: msg, time: this.date,
    }
    this.conversation.messages.push(temp);
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
