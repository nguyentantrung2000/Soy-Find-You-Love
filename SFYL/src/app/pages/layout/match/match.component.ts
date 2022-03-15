import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {HttpClientService} from './../../../services/http-client.service'
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  constructor(public userData: DataService,public httpSv: HttpClientService) {}

  ngOnInit(): void {}
}
