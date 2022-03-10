import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
import { RecoverAccountComponent } from '../recover-account/recover-account.component';
@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss'],
})
export class DialogLoginComponent implements OnInit {
  value1 = '';
  value2 = '';
  constructor(private login: LoginGGService, public dialog: MatDialog) {}
  openDialog1() {
    this.dialog.open(DialogRegisterComponent);
  }
  openDialog2() {
    this.dialog.open(RecoverAccountComponent);
  }



  ngOnInit(): void {}
  public Login() {
    this.login.loginGG();
  }
}
