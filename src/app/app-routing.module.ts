import { LoginComponent } from './user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { AdrListComponent } from './pages/adrs/adr-list/adr-list.component';
import { AdrInfoComponent } from './pages/adrs/adr-info/adr-info.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'adrs',
    pathMatch: 'full',
    component: AdrListComponent
  },
  {
    path: 'categories',
    pathMatch: 'full',
    component: CategoryListComponent
  },
  {
    path: 'adr-info',
    pathMatch: 'full',
    component: AdrInfoComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
