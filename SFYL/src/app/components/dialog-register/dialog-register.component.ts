import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { SigninSuccessComponent } from '../signin-success/signin-success.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent implements OnInit {
  value1 = '';
  value2 = '';
  value3 = '';
  value4 = '';
  value5 = '';
  constructor(private login: LoginGGService,public dialog: MatDialog) { 

  }

  ngOnInit(): void {}

    public openDialog(){
      this.dialog.open(SigninSuccessComponent);
    }
    public Login() {
      this.login.loginGG();
    }
  

}
