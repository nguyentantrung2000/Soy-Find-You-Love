import { Injectable } from '@angular/core';
import { User_chat } from 'src/models/user_chat.models';
@Injectable({
  providedIn: 'root',
})
export class UserCharService {
  public userChatList: Array<User_chat> = [
    {
      displayName: 'Hào Ca',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '26 Sơn La chào anh em nhá !',
      time: '11:10',
      messageRead: true 
    },

    {
      displayName: 'Hào Cá',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '27 Điện Biên chào anh em nhá !',
      time: '11:10', 
      messageRead: false 
    },

    {
      displayName: 'Hào Cả',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '28 Hòa Bình chào anh em nhá !',
      time: '11:10',
      messageRead: true 
    },

    {
      displayName: 'Hào Cà',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '29 Hà Nội chào anh em nhá !',
      time: '11:10',
      messageRead: false 
    },

    {
      displayName: 'Hào Cạ',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '30 cũng là Hà Nội chào anh em nhá !',
      time: '11:10', 
      messageRead: false 
    },

    {
      displayName: 'Hào Cạ',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '30 cũng là Hà Nội chào anh em nhá !',
      time: '11:10',
      messageRead: true 
    },

    {
      displayName: 'Hào Cạ',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '30 cũng là Hà Nội chào anh em nhá !',
      time: '11:10',
      messageRead: false 
    },

    {
      displayName: 'Hào Cạ',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '30 cũng là Hà Nội chào anh em nhá !',
      time: '11:10',
      messageRead: true 
    },

    {
      displayName: 'Hào Cạ',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '30 cũng là Hà Nội chào anh em nhá !',
      time: '11:10',
      messageRead: false 
    },

    {
      displayName: 'Hào Cạ',
      photoURL: '../../../assets/images/hh.jpg',
      mess: '30 cũng là Hà Nội chào anh em nhá !',
      time: '11:10',
      messageRead: true
    },
  ];

  public data: Array<any> = [];
  constructor() {}
}
