import { Component, OnInit } from '@angular/core';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.scss'],
})
export class DialogLogoutComponent implements OnInit {
  constructor(private out: LoginGGService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  public logOut() {
    this.out.logOut();
    this.dialog.closeAll();
  }
}
