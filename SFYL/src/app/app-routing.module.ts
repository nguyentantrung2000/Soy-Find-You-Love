import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'homePage', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) }, { path: 'match', loadChildren: () => import('./pages/match/match.module').then(m => m.MatchModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
