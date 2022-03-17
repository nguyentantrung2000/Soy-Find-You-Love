import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../app/services/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    canActivate: [AuthGuardService],
    path: 'layout',
    loadChildren: () =>
      import('./pages/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'safety',
    loadChildren: () =>
      import('./pages/safety/safety.module').then((m) => m.SafetyModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.module').then((m) => m.SupportModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
