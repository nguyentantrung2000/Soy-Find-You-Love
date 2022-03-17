import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGGService } from 'src/app/services/login-gg.service';
// import { MatChipInputEvent } from '@angular/material/chips';
// import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Hobby1 {
  name: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public router: Router, public login: LoginGGService) {}

  ngOnInit(): void {}
  navigate(path: string) {
    this.router.navigate([path]);
  }

  // addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // hobbies: Hobby1[] = [
  //   { name: 'Shopping' },
  //   { name: 'Football' },
  //   { name: 'Woman' },
  // ];

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.hobbies.push({ name: value });
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(hobby: Hobby1): void {
  //   const index = this.hobbies.indexOf(hobby);

  //   if (index >= 0) {
  //     this.hobbies.splice(index, 1);
  //   }
  // }
}
