import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetyRoutingModule } from './safety-routing.module';
import { SafetyComponent } from './safety.component';


@NgModule({
  declarations: [
    SafetyComponent
  ],
  imports: [
    CommonModule,
    SafetyRoutingModule
  ]
})
export class SafetyModule { }
