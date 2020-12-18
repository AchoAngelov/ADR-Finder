import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  slide: boolean;
  constructor() { }

  ngOnInit(): void {
    this.slide = true;
  }
  menuOpen(): void{
    this.slide = !this.slide;
  }
}
