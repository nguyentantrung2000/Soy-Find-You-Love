import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [NavBarComponent, SideBarComponent],
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  exports: [ReactiveFormsModule, MatIconModule],
})
export class ShareModule {}
