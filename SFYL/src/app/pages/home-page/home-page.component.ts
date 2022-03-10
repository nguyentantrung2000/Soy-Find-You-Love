import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginGGService } from 'src/app/services/login-gg.service';
import { DialogLoginComponent } from 'src/app/components/dialog-login/dialog-login.component';
import { DialogRegisterComponent } from 'src/app/components/dialog-register/dialog-register.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  form!: FormGroup;
  constructor(public logingg: LoginGGService, public dialog: MatDialog) {}
  openDialog1() {
    this.dialog.open(DialogLoginComponent);
  }
  openDialog2() {
    this.dialog.open(DialogRegisterComponent);
  }

  ngOnInit(): void {}
}
