import { UserService } from './../../../user/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from './../category.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  categories: any;
  categoryId: number;
  isAdmin: boolean;
  subs: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
    });
    this.subs = this.userService.user.subscribe(userData => {
      if(userData){
        this.isAdmin = userData.isAdmin;
      }
    })
  }
  onEdit(id) {
    this.router.navigate([id], { relativeTo: this.route });
  }
  onDelete(id) {
    this.categoryService.deleteCategory(id).subscribe();
  }
  onNewCategory(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
