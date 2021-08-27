import { Component, OnInit } from '@angular/core';
import { IAdr, ICategory } from 'src/app/shared/interfaces';
import { CategoryService } from '../categories/category.service';
import { AdrService } from '../adrs/adr.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: ICategory[];
  adrs: IAdr[];
  constructor(
    public categoryService: CategoryService,
    public adrService: AdrService
  ) {}

 ngOnInit(): void{
 }
}
