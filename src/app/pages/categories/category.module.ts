import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryService } from './category.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AddCategoryComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoryService
  ],
})
export class CategoryModule { }
