import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
import { RecoverAccountComponent } from '../recover-account/recover-account.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss'],
})
export class DialogLoginComponent implements OnInit {
  value1 = '';
  value2 = '';
  constructor(
    private login: LoginGGService,
    public dialog: MatDialog,
    public http: HttpClient,
    private router: Router
  ) { }
  openDialog1() {
    this.dialog.open(DialogRegisterComponent);
  }
  openDialog2() {
    this.dialog.closeAll()
    this.dialog.open(RecoverAccountComponent);
  }

  ngOnInit(): void { }
  public async Login() {
    try {
      let result = await this.login.loginGG()
      if (result.user) {
        this.http
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
                docId: this.login.user?.uid
              },
            }
          ).subscribe(response=>{
            console.log(response)
          })
        await this.router.navigate(['/layout/match']);
        this.dialog.closeAll();
      }
    } catch (error) {
      console.log(error)
    }
  }
}
