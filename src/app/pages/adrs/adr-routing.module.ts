import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdrListComponent } from './adr-list/adr-list.component';
import { AdminGuard } from 'src/app/user/admin.guard';
import { AuthGuard } from 'src/app/user/auth/auth.guard';
import { AddAdrComponent } from './add-adr/add-adr.component';

const routes: Routes = [
  {
    path: 'adrs',
    component: AdrListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'new',
        component: AddAdrComponent
      },
      {
        path: ':id',
        component: AddAdrComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdrRoutingModule {}
