import { Time } from "@angular/common";
export interface User_chat{
    displayName: String;
    photoURL: String;
    mess: [{
      chat: String,
      time: Time,
    }]
  }