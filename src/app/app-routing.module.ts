
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './user/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { AdrInfoComponent } from './pages/adrs/adr-info/adr-info.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'auth',
    pathMatch: 'full',
    component: AuthComponent
  },
  {
    path: 'adr-info',
    pathMatch: 'full',
    component: AdrInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
