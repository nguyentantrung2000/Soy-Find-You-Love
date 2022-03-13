import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from 'src/app/components/dialog-logout/dialog-logout.component';
import { DialogDeleteAccComponent } from 'src/app/components/dialog-delete-acc/dialog-delete-acc.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  lat: any;
  lng: any;
  a: any;
  Location: any;
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
  constructor(public dialog: MatDialog, public http: HttpClient) {}

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
        await this.http.get(request_url).subscribe(async (res: any) => {
          this.a = await res;
          this.Location = res.results[0].formatted;
          console.log(this.Location);
          this.cal();
        });
      });
    }
  }
  public cal() {
    let lat1 = this.lat;
    let lon1 = this.lng;
    let lat2 = 10.75076;
    let lon2 = 106.63153;

    let R = 6371e3; // metres
    let φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    let φ2 = (lat2 * Math.PI) / 180;
    let Δφ = ((lat2 - lat1) * Math.PI) / 180;
    let Δλ = ((lon2 - lon1) * Math.PI) / 180;

    let a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = (R * c) / 1000; // in metres
    console.log(Math.round(d) + 'km');
  }
  ngOnInit(): void {}
}
