import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { collectionData, collection, Firestore } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  user: any;
  data: any;
  constructor(public logingg: LoginGGService, private firestore: Firestore) {
    // let collect = collection(firestore, 'User');
    // collectionData(collect, { idField: 'Id' }).subscribe((data: any) => {
    //   data.forEach((doc: any) => {
    //     console.log(doc.Id);
    //     console.log(doc.Name);
    //   });
    // });
  }

  ngOnInit(): void {}
}
