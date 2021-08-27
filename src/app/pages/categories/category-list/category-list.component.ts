import { ICategory } from 'src/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { CategoryService } from './../category.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
    });
  }

  onNewCategory(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
