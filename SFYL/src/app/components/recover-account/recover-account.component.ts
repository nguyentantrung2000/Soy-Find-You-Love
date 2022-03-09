import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.scss'],
})
export class RecoverAccountComponent implements OnInit {
  form!: FormGroup;

  constructor(public FormBuilder: FormBuilder, public Router: Router) {
    this.form = this.FormBuilder.group({
      email: ['', Validators.email],
    });
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
