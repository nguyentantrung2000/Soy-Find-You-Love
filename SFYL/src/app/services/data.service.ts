import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { LoginGGService } from './login-gg.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userList!: Array<any>;
  constructor(
    public fs: Firestore,
    public http: HttpClient,
    public login: LoginGGService
  ) {}
  public getAllData() {
    let allUser = collection(this.fs, 'User');
    collectionData(allUser).subscribe((data: any) => {
      // console.log(this.userList);
      for (let i = 0; i < data.length; i++) {
        let distance = this.cal(
          this.login.location.lat,
          this.login.location.long,
          data[i].Location.lats,
          data[i].Location.long
        );
        Object.assign(data[i], {
          distance: distance,
        });
      }
      console.log(data);
      this.userList = data;
    });
  }
  public cal(lat1: number, lon1: number, lat2: number, lon2: number) {
    console.log(lat1, lon1, lat2, lon2);
    let R = 6371e3; // metres
    let φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    let φ2 = (lat2 * Math.PI) / 180;
    let Δφ = ((lat2 - lat1) * Math.PI) / 180;
    let Δλ = ((lon2 - lon1) * Math.PI) / 180;

    let a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = (R * c) / 1000; // in metres
    return Math.round(d);
  }
}
