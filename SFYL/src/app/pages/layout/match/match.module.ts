import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchComponent } from './match.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    MatchComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    ShareModule
  ]
})
export class MatchModule { }
