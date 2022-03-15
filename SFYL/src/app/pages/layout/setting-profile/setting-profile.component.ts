import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Hobby {
  name: string;
}
@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss'],
})
export class SettingProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value = 'Clear all';
  value1 = 'Clear all';
  value2 = 'Clear all';
  value3 = 'Clear all';

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  hobbies: Hobby[] = [
    { name: 'Shopping' },
    { name: 'Football' },
    { name: 'Woman' },
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.hobbies.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(hobby: Hobby): void {
    const index = this.hobbies.indexOf(hobby);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }
}
