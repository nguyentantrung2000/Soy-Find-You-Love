import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userList!: Array<any>;
  constructor(public fs: Firestore, public http: HttpClient) {
    let allUser = collection(fs, 'User');
    collectionData(allUser).subscribe((data) => {
      this.userList = data;
      console.log(this.userList);
    });
  }
}
