import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/services/http-client.service';

export interface Hobby {
  name: string;
}
@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss'],
})
export class SettingProfileComponent implements OnInit {
  datas: string | undefined;

  gioitinh: any;
  noio: any;
  ngaysinh: any;
  Gender = [{ gen: 'Nam' }, { gen: 'Nữ' }];
  public changeGender(event: any) {
    console.log('gioitinh' + event);
  }
  // constructor(
  //   public httpSv: HttpClientService,
  //   public FormBuilder: FormBuilder
  // ) { }
  form!: FormGroup;
   constructor(public httpSv: HttpClientService, public FormBuilder:FormBuilder) {
    this.form = this.FormBuilder.group({
      gioitinh: ['', Validators.required],
      noio:['',Validators.required],
      ngaysinh:['',Validators.required],
      sothich:['', Validators.required],


    });
  }


  ngOnInit(): void { }

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
  // public gioitinh = '';
  // public noisong = '';
  // public ngaysinh = '';
  // public sothich = '';
  public async test(data: any) {
    alert(this.Gender[data].gen);
  }
}
