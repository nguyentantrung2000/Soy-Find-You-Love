import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from 'src/app/components/dialog-logout/dialog-logout.component';
import { DialogDeleteAccComponent } from 'src/app/components/dialog-delete-acc/dialog-delete-acc.component';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  lat: any;
  lng: any;
  a: any;
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'km';
    }

    return value;
  }
  formatAge(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }

    return value;
  }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogLogoutComponent);
  }
  openDialogDelete() {
    this.dialog.open(DialogDeleteAccComponent);
  }
  public Distance() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        var apikey = '8cdaef3a4f7041548629225833ddd204';

        var api_url = 'https://api.opencagedata.com/geocode/v1/json';

        var request_url =
          api_url +
          '?' +
          'key=' +
          apikey +
          '&q=' +
          encodeURIComponent(this.lat + ',' + this.lng) +
          '&pretty=1' +
          '&no_annotations=1';
        // await this.http.get(request_url).subscribe(async (res: any) => {
        //   this.a = await res;
        //   console.log(res.results[0].formatted);
        //   this.cal();
        // });
      });
    }
  }
  ngOnInit(): void {}
}
