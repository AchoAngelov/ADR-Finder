import { AddCategoryComponent } from './add-category/add-category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CategoryService
  ],
})
export class CategoryModule { }
