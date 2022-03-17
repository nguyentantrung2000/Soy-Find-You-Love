import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from 'src/app/components/dialog-logout/dialog-logout.component';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  navigate(path: string) {
    this.router.navigate([path]);
  }

  logOut() {
    this.dialog.open(DialogLogoutComponent);
  }

  
}
