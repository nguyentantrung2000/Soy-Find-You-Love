import { Component, OnInit } from '@angular/core';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-signin-success',
  templateUrl: './signin-success.component.html',
  styleUrls: ['./signin-success.component.scss']
})
export class SigninSuccessComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public openDialog(){
    this.dialog.open(DialogLoginComponent);
  }

}
