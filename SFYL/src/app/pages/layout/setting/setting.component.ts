import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from 'src/app/components/dialog-logout/dialog-logout.component';
import { DialogDeleteAccComponent } from 'src/app/components/dialog-delete-acc/dialog-delete-acc.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/services/http-client.service';
import { environment } from '../../../../environments/environment';
import { LoginGGService } from 'src/app/services/login-gg.service';
import { DialogMatchComponent } from 'src/app/components/dialog-match/dialog-match.component';
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
  Location1: any;
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
  constructor(
    public dialog: MatDialog,
    public http: HttpClient,
    public userLocation: HttpClientService,
    public login: LoginGGService
  ) {}

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
          this.Location1 = res.results[0].geometry;
          // let b = this.Location1[Object.keys(this.Location1)[0]];
          // console.log('haha' + b);
          this.login.location = {
            lat: this.lat,
            long: this.lng,
          };
          localStorage.setItem(
            '_location',
            JSON.stringify({
              lat: this.lat,
              long: this.lng,
            })
          );
          await this.http
            .post(environment.endpoint + 'user/location', {
              data: {
                collectionName: 'User',
                docId: this.login.user?.uid,
                Location: {
                  lats: this.lat,
                  long: this.lng,
                },
              },
            })
            .subscribe((res) => {
              console.log(res);
            });
        });
      });
    }
  }

  ngOnInit(): void {
    // this.Distance();
  }
}
