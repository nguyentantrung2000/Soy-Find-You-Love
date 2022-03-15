import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { SigninSuccessComponent } from '../signin-success/signin-success.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
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
  constructor(private login: LoginGGService,public dialog: MatDialog,public http: HttpClient) { 

  }

  ngOnInit(): void {}

    public openDialog(){
      this.dialog.closeAll();
      this.dialog.open(SigninSuccessComponent);
     
    }
    public async Login() {
      this.dialog.closeAll();
      this.login.loginGG();
      if (this.login.user != null) {
        await this.http
          .post(
            environment.endpoint + 'user',
            {
              collectionName: 'User',
              data: {
                email: this.login.user?.email,
                name: this.login.user?.displayName,
                photoURL: this.login.user?.photoURL,
                Location: [],
                Like: [],
                unLike: [],
                Watting: [],
              },
            },
            { responseType: 'text' }
          ).toPromise();
      }
    }
  

}
