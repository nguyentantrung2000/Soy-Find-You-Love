import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DialogLoginComponent } from 'src/app/components/dialog-login/dialog-login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {DialogLogoutComponent} from '../../components/dialog-logout/dialog-logout.component'
import {DialogDeleteAccComponent} from 'src/app/components/dialog-delete-acc/dialog-delete-acc.component'; 
@NgModule({
  declarations: [NavBarComponent, SideBarComponent,DialogLoginComponent,DialogLogoutComponent,DialogDeleteAccComponent],
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatButtonModule,MatDialogModule,MatProgressBarModule,
    MatSliderModule,MatSlideToggleModule,MatSelectModule,MatTooltipModule ],
  exports: [
    ReactiveFormsModule,
    NavBarComponent,
    SideBarComponent,
    DialogLoginComponent,
    DialogLogoutComponent,
    DialogDeleteAccComponent,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule
  
  ],
})
export class ShareModule {}
