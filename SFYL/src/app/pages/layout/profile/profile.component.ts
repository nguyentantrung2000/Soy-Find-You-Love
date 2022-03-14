import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGGService } from 'src/app/services/login-gg.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public router: Router, public login: LoginGGService) {}

  ngOnInit(): void {}
  navigate(path: string) {
    this.router.navigate([path]);
  }
}
