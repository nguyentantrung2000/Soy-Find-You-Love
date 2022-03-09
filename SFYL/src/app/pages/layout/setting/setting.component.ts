import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from 'src/app/components/dialog-logout/dialog-logout.component';
import { DialogDeleteAccComponent } from 'src/app/components/dialog-delete-acc/dialog-delete-acc.component';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'km';
    }

    return value;
  }
  formatAge(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) ;
    }

    return value;
  }
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogLogoutComponent);
  }
  openDialogDelete() {
    this.dialog.open(DialogDeleteAccComponent);
  }
  ngOnInit(): void {
  }


}
