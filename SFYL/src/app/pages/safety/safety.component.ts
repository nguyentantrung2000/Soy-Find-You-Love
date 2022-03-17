import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {

  constructor(public router:RouterService) { }

  ngOnInit(): void {
  }
  public back(){
    this.router.backHomePage();
  }

}
