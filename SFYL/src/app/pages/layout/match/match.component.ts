import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClientService } from './../../../services/http-client.service';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  constructor(public userData: DataService, public httpSv: HttpClientService) {}
  index = 0;

  public friendList1: Array<any> = [
    {
      photoURL:
        'https://hinhgaixinh.com/wp-content/uploads/2021/11/hinh-anh-gai-xinh-deo-mat-kinh-dep-nhat-the-gioi.jpg',
      name: 'Nguyen Tan Trung',
      dob: '229292929',
    },
    {
      photoURL:
        'https://image-us.24h.com.vn/upload/3-2021/images/2021-09-21/anh-2-1632216610-256-width650height867.jpg',
      name: 'Nguyen Tan Teo',
      dob: '229292929',
    },
    {
      photoURL:
        'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg',
      name: 'Nguyen Tan Lu',
      dob: '229292929',
    },
  ];

  ngOnInit(): void {}
  async getNextUser() {
    if (this.index > this.friendList1.length) {
      this.index = 0;
    } else {
      console.log(this.friendList1[this.index]);
      this.index += 1;
      this.friendList1[this.index];
    }
  }
  // public async addData(){
  //   await (await this.httpSv.postData(this.name,this.pirce,this.photoURL,this.popularity,this.quantity,this.collectionName))
  //   .subscribe((value: any) =>{
  //       alert(value['message']);
  //   });
  // }
  // public async Login() {
  //   this.login.loginGG();

  //   if (this.login.user != null) {
  //     await this.http
  //       .post(
  //         environment.endpoint + 'user',
  //         {
  //           collectionName: 'User',
  //           data: {
  //             email: this.login.user?.email,
  //             name: this.login.user?.displayName,
  //             photoURL: this.login.user?.photoURL,
  //             Location: [],
  //             Like: [],
  //             unLike: [],
  //             Watting: [],
  //           },
  //         },
  //         { responseType: 'text' }
  //       )
  //       .toPromise();
  //     this.dialog.closeAll();
  //   }
  // }
}
