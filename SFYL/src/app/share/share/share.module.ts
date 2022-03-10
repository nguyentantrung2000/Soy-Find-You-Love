import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogLoginComponent } from 'src/app/components/dialog-login/dialog-login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DialogRegisterComponent } from '../../components/dialog-register/dialog-register.component';
import { CheckEmailComponent } from 'src/app/components/check-email/check-email.component';
import { SigninSuccessComponent } from 'src/app/components/signin-success/signin-success.component';
import { RecoverAccountComponent } from 'src/app/components/recover-account/recover-account.component';
@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    DialogLoginComponent,
    DialogRegisterComponent,
    CheckEmailComponent,
    SigninSuccessComponent,
    RecoverAccountComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    NavBarComponent,
    DialogRegisterComponent,
    SideBarComponent,
    CheckEmailComponent,
    SigninSuccessComponent,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
})
export class ShareModule {}
