import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecoverAccountComponent } from '../../components/recover-account/recover-account.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [NavBarComponent, SideBarComponent, RecoverAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ReactiveFormsModule,
    NavBarComponent,
    SideBarComponent,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    RecoverAccountComponent,
    MatInputModule,
  ],
})
export class ShareModule {}
