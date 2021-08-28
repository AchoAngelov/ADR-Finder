import { IAdr } from './../../../shared/interfaces/adr';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdrService } from './../adr.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params} from '@angular/router';
import { CategoryService } from '../../categories/category.service';
import { ICategory } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-add-adr',
  templateUrl: './add-adr.component.html',
  styleUrls: ['./add-adr.component.css']
})
export class AddAdrComponent implements OnInit {
  adrForm: FormGroup;
  adrData: IAdr;
  adr: IAdr;
  editMode = true;
  id: number;
  categories: ICategory;
  constructor(
    private adrService: AdrService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = response.data;
        console.log(this.categories);
      });
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
    this.initForm();
  }
 initForm() {
    if (this.editMode) {
      this.adrService.getAdr(this.id).subscribe(
        adr => {
         this.adrForm = this.formBuilder.group({
          name : [adr.name, [Validators.required]],
          category : [''||[adr.categoryId, adr.category], [Validators.required]],
          adrNumber: [adr.adrNumber, [Validators.required]],
        });
        }
      );

    } else {
      this.adrForm = this.formBuilder.group({
        name : ['', [Validators.required]],
        category : ['', [Validators.required]],
        adrNumber: ['', [Validators.required]],
      });
    }

  }
  onSubmit() {
    console.log(this.adrForm.value.category[0]);
    this.adrData = {
      name:  this.adrForm.value.name,
      adrNumber:  this.adrForm.value.adrNumber,
      categoryId:  this.adrForm.value.category[0],
      category:  this.adrForm.value.category[1],
    }
    if (this.editMode) {
      this.adrService.editAdr(this.adrData, this.id).subscribe();
    } else {
      this.adrService.addAdr(this.adrData).subscribe();
    }
  }
}
