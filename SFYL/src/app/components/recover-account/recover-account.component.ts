import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckEmailComponent } from '../check-email/check-email.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.scss'],
})
export class RecoverAccountComponent implements OnInit {
  form!: FormGroup;

  constructor(public FormBuilder: FormBuilder, public Router: Router,public dialog: MatDialog) {
    this.form = this.FormBuilder.group({
      email: ['', Validators.email],
    });
  }
  openDialog() {
    this.dialog.closeAll();
    this.dialog.open(CheckEmailComponent);
  }
  ngOnInit(): void {}

  // public test() {
  //   let form = this.form.value;
  //   if (this.form.valid) {
  //     console.log(this.form.valid);
  //     alert(`Email: ${form.email}`);
  //     // alert("Email: " + this.form.value.email + "\nText: " + this.form.value.text);
  //   }
  // }
}
