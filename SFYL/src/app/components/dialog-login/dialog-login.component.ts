import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss'],
})
export class DialogLoginComponent implements OnInit {
  value1 = '';
  value2 = '';
  constructor(private login: LoginGGService, public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogRegisterComponent);
  }

  ngOnInit(): void {}
  public Login() {
    this.login.loginGG();
  }
}
