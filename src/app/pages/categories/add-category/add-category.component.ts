import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

import { ICategory, IAdr } from 'src/app/shared/interfaces';
import { CategoryService } from './../category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: ICategory;
  @ViewChild('f', { static: false }) categoryForm: NgForm;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): any {
    if (!form.valid) {
      return;
    }

    this.category = {
      name: form.value.name,
      description: form.value.description,
      adrs: [{}]
    };
    this.categoryService.addCategory(this.category).subscribe();
    this.categoryForm.reset();
  }
}
