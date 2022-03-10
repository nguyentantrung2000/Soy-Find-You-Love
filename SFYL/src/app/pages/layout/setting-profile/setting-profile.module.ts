import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingProfileRoutingModule } from './setting-profile-routing.module';
import { SettingProfileComponent } from './setting-profile.component';
import { ShareModule } from 'src/app/share/share/share.module';

@NgModule({
  declarations: [SettingProfileComponent],
  imports: [CommonModule, SettingProfileRoutingModule, ShareModule],
})
export class SettingProfileModule {}
