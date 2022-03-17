import { Injectable } from '@angular/core';
import { User_chat } from 'src/models/user_chat.model';
import { HttpClientService } from './http-client.service';
import { LoginGGService } from './login-gg.service';
@Injectable({
  providedIn: 'root',
})
export class UserChatService {
  // public userChatList: Array<User_chat> = [
  //   {
  //     displayName: 'Hào Ca',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '26 Sơn La chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: true,
  //     messages:[
  //       {id: "1", body: " Hello1 Hello1 Hello1 Hello1Hello1 Hello Hello1He llo1Hello1He llo11He lo11Hello1 1Hello 1Hel lo11Hello 11Hel o11Hel lo 1 1Hel1Hel 1Hel 1Hel", time:"8:21"},
  //       {id: "2", body: "Hello1 Hello1 Hello1 Hello1Hello1 Hello Hello1He llo1Hello1He llo11He lo11Hello1 1Hello 1Hel lo11Hello 11Hel o11Hel lo 1 1Hel1Hel 1Hel 1Hel", time:"8:21"},
  //       {id: "1", body: "Hello 3", time:"8:21"},
  //       {id: "2", body: "Hello 4", time:"8:21"},
  //       {id: "2", body: "Hello 4", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},
  //       {id: "1", body: "Hello 3", time:"8:21"},
  //       {id: "2", body: "Hello 4", time:"8:21"},
  //       {id: "2", body: "Hello 4", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},
  //       {id: "1", body: "Hello 3", time:"8:21"},
  //       {id: "2", body: "Hello 4", time:"8:21"},
  //       {id: "2", body: "Hello 4", time:"8:21"},
  //     ]
  //   },

  //   {
  //     displayName: 'Hào Cá',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '27 Điện Biên chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: false,
  //     messages:[
  //       {id: "1", body: "Hello Huy", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Hào Cả',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '28 Hòa Bình chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: true,
  //     messages:[
  //       {id: "1", body: "Hello Bee", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Hào Cà',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '29 Hà Nội chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: false,
  //     messages:[
  //       {id: "1", body: "Hello AAA", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Hào Cạ',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '30 cũng là Hà Nội chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: false,
  //     messages:[
  //       {id: "1", body: "Hello CCC", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Hào Cam',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '30 cũng là Hà Nội chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: true,
  //     messages:[
  //       {id: "1", body: "Hello fdasf", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Tiểu Hữu',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '30 cũng là Hà Nội chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: false,
  //     messages:[
  //       {id: "1", body: "Hello 111", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Huy Bùi Thanh',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '30 cũng là Hà Nội chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: true,
  //     messages:[
  //       {id: "1", body: "Hello 12312", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Vũ',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '30 cũng là Hà Nội chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: false,
  //     messages:[
  //       {id: "1", body: "Hello 1432", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },

  //   {
  //     displayName: 'Trọng',
  //     photoURL: '../../../assets/images/hh.jpg',
  //     latestMess: '30 cũng là Hà Nội chào anh em nhá !',
  //     time: '11:10',
  //     messageRead: true,
  //     messages:[
  //       {id: "1", body: "Hello 1", time:"8:21"},
  //       {id: "2", body: "Hello 2", time:"8:21"},

  //     ]
  //   },
  // ];

  public data: Array<any> = [];
  constructor(public login: LoginGGService, public chat: HttpClientService) {}

  public userChatList: any = [];
  public async getConverList(userId: String | undefined) {
    await this.chat.getChatList(userId).then((data) => {
      data.subscribe((value) => {
        console.log(value);
        this.userChatList = value;
      });
    });
  }
}
