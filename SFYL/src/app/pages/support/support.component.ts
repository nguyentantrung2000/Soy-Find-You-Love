import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  value = 'Clear me';

  constructor(public router:RouterService) { }

  ngOnInit(): void {
  }
  public back(){
    this.router.backHomePage();
  }
  
}
