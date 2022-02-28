import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
   
  ],
  exports: [ReactiveFormsModule,NavBarComponent,
    SideBarComponent,  MatIconModule,MatButtonModule],
})
export class ShareModule {}
