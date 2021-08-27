import { ICategory } from 'src/app/shared/interfaces';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from './../category.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryData: ICategory;
  category = new Subject<ICategory>();
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.categoryForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      description:['', [Validators.required]],
      categoryNumber : ['', [Validators.required]],
      imgPath: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.categoryForm);
    this.categoryData = {
      name:  this.categoryForm.value.name,
      description:  this.categoryForm.value.description,
      categoryNumber:  this.categoryForm.value.categoryNumber,
      imgPath:  this.categoryForm.value.imgPath,
    }
    this.categoryService.addCategory(this.categoryData).subscribe();
    this.category.next(this.categoryData);
  }
}
