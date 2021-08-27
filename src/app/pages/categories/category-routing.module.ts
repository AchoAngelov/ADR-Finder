import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from 'src/app/user/admin.guard';
import { AuthGuard } from 'src/app/user/auth/auth.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'new',
        component: AddCategoryComponent
      },
      {
        path: ':id',
        component: AddCategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
