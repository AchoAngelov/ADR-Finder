import { AdminGuard } from './user/admin.guard';
import { AuthGuard } from './user/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { AdrListComponent } from './pages/adrs/adr-list/adr-list.component';
import { AdrInfoComponent } from './pages/adrs/adr-info/adr-info.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { AuthComponent } from './user/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'adrs',
    pathMatch: 'full',
    canActivate: [AdminGuard],
    component: AdrListComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        canActivateChild: [AdminGuard],
        component: AddCategoryComponent
      },
    ]
  },
  {
    path: 'adr-info',
    pathMatch: 'full',
    component: AdrInfoComponent
  },
  {
    path: 'auth',
    pathMatch: 'full',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
