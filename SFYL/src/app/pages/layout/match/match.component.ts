import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {HttpClientService} from './../../../services/http-client.service'
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  constructor(public userData: DataService,public httpSv: HttpClientService) {}

  ngOnInit(): void {}
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
