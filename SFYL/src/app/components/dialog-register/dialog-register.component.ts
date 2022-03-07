import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent implements OnInit {
  value1 = '';
  value2 = '';
  constructor(private login: LoginGGService) { 

  }

  ngOnInit(): void {}
    public Login() {
      this.login.loginGG();
    }
  

}
