import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginGGService } from 'src/app/services/login-gg.service';
import { collectionData, collection, Firestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  form!: FormGroup;
  user: any;
  constructor(public logingg: LoginGGService, private firestore: Firestore) {
    let collect = collection(firestore, 'User');
    collectionData(collect, { idField: 'Id' }).subscribe((data: any) => {
      data.forEach((doc: any) => {
        console.log(doc.Id);
        console.log(doc.Name);
      });
    });
  }
  public login() {
    this.logingg.loginGG();
  }

  public logout() {
    this.logingg.logOut();
  }

  ngOnInit(): void {}
}
