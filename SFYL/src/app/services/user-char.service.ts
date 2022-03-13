import { Injectable } from '@angular/core';
import { User_chat } from 'src/models/uset_chat.models';
@Injectable({
  providedIn: 'root'
})
export class UserCharService {
  public userChatList: Array<User_chat> = [
    {
      displayName:"Hào Ca",
      photoURL:"../../../assets/images/hh.jpg" ,
      mess:[
        {
          chat:"26 Sơn La chào anh em nhá !",
          time:{hours:12,minutes:20}
        }
      ]
    },

    {
      displayName:"Hào Cá",
      photoURL:"../../../assets/images/hh.jpg" ,
      mess:[
        {chat:"27 Điện Biên chào anh em nhá !",
        time:{hours:12,minutes:10}
        }
      ]
    },

    {
      displayName:"Hào Cả",
      photoURL:"../../../assets/images/hh.jpg" ,
      mess:[
        {chat:"28 Hòa Bình chào anh em nhá !",
        time:{hours:11,minutes:50}
        }
      ]
    },

    {
      displayName:"Hào Cà",
      photoURL:"../../../assets/images/hh.jpg" ,
      mess:[
        {chat:"29 Hà Nội chào anh em nhá !",
        time:{hours:10,minutes:48}
        }
      ]
    },

    {
      displayName:"Hào Cạ",
      photoURL:"../../../assets/images/hh.jpg" ,
      mess:[
        {chat:"30 cũng là Hà Nội chào anh em nhá !",
        time:{hours:10,minutes:34}
        }
      ]
    },
  ]

  public data : Array<any> = [];
  constructor() { }
}
