import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss'],
})
export class DialogLoginComponent implements OnInit {
  value1 = '';
  value2 = '';
  constructor(private login: LoginGGService) {}

  ngOnInit(): void {}
  public Login() {
    this.login.loginGG();
  }
}
