import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { ShareModule } from '../../../share/share/share.module';

@NgModule({
  declarations: [SettingComponent],
  imports: [CommonModule, SettingRoutingModule, ShareModule],
})
export class SettingModule {}
