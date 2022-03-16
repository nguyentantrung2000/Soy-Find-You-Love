import { Message } from "./message.model";

export interface User_chat{
    displayName: String;
    photoURL: String;
    time: String;
    messageRead: boolean;
    latestMess: string;
    messages: Array<Message>;
   
  }