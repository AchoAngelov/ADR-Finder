import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from './../category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any;
  categoryId: number;
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
  onEdit(id) {
    this.router.navigate([id], { relativeTo: this.route });
  }
  onNewCategory(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
