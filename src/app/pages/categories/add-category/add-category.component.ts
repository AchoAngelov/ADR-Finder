import { ICategory } from 'src/app/shared/interfaces';
import { Component, Input, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from './../category.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryData: ICategory;
  category: ICategory;
  editMode = true;
  id: number
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
    this.initForm();
  }
 initForm() {
    if (this.editMode) {
      this.categoryService.getCategory(this.id).subscribe(
        category => {
         this.categoryForm = this.formBuilder.group({
          name : [category.name, [Validators.required]],
          description:[category.description, [Validators.required]],
          categoryNumber : [category.categoryNumber, [Validators.required]],
          imgPath: [category.imgPath, [Validators.required]],
        });
        }
      );

    } else {
      this.categoryForm = this.formBuilder.group({
        name : ['', [Validators.required]],
        description:['', [Validators.required]],
        categoryNumber : ['', [Validators.required]],
        imgPath: ['', [Validators.required]]
      });
    }

  }
  onSubmit() {
    this.categoryData = {
      name:  this.categoryForm.value.name,
      description:  this.categoryForm.value.description,
      categoryNumber:  this.categoryForm.value.categoryNumber,
      imgPath:  this.categoryForm.value.imgPath,
    }
    if (this.editMode) {
      this.categoryService.editCategory(this.categoryData, this.id).subscribe();
    } else {
      this.categoryService.addCategory(this.categoryData).subscribe();
    }
    this.router.navigate(['categories']);
  }
}
