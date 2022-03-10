import { Component, OnInit } from '@angular/core';
import { RecoverAccountComponent } from '../recover-account/recover-account.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss'],
})
export class CheckEmailComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  public openDialog(){
    this.dialog.open(RecoverAccountComponent);
  }
  ngOnInit(): void {}
}
