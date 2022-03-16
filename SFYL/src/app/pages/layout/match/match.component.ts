import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { HttpClientService } from './../../../services/http-client.service';
import { environment } from '../../../../environments/environment';
import { I } from '@angular/cdk/keycodes';
import { doc } from 'firebase/firestore';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  index = 0;
  lat: any;
  lng: any;
  a: any;
  Location: any;
  Location1: any;
  constructor(
    public userData: DataService,
    public httpSv: HttpClientService,
    public http: HttpClient,
    public login: LoginGGService
  ) {}

  public friendList1: Array<any> = [];

  ngOnInit(): void {
    this.Distance();
    this.userData.getAllData();
  }
  async getNextUser() {
    if (this.index > this.userData.userList.length) {
      this.index = 0;
    } else {
      console.log(this.userData.userList[this.index]);
      this.index += 1;
      this.userData.userList[this.index];
    }
   
  }
  public Distance() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        var apikey = '8cdaef3a4f7041548629225833ddd204';

        var api_url = 'https://api.opencagedata.com/geocode/v1/json';

        var request_url =
          api_url +
          '?' +
          'key=' +
          apikey +
          '&q=' +
          encodeURIComponent(this.lat + ',' + this.lng) +
          '&pretty=1' +
          '&no_annotations=1';
        await this.http.get(request_url).subscribe(async (res: any) => {
          this.a = await res;
          this.Location = res.results[0].formatted;
          this.Location1 = res.results[0].geometry;
          // let b = this.Location1[Object.keys(this.Location1)[0]];
          // console.log('haha' + b);
          console.log(this.lat);
          console.log(this.lng);
          this.login.location = {
            lat: this.lat,
            long: this.lng,
          };
          localStorage.setItem(
            '_location',
            JSON.stringify({
              lat: this.lat,
              long: this.lng,
            })
          );
          await this.http
            .post(environment.endpoint + 'user/location', {
              data: {
                collectionName: 'User',
                docId: this.login.user?.uid,
                Location: {
                  lats: this.lat,
                  long: this.lng,
                },
              },
            })
            .subscribe((res) => {
              console.log(res);
            });
        });
      });
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

  public async postLike(Id:string){
    await( await this.httpSv.LikeService("User",this.login.user?.uid,Id))
    .subscribe((value: any)=>{
      alert(value['message']);
    });
  }
  public async postUnLike(Id:string){
    await( await this.httpSv.UnLikeService("User",this.login.user?.uid,Id))
    .subscribe((value: any)=>{
      alert(value['message']);
    });
  }
}
