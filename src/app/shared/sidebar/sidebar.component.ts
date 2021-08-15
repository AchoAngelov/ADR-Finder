import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  slide = true;
  constructor() { }

  ngOnInit(): void {
  }
  menuOpen(): void {
    this.slide = !this.slide;
  }
}
