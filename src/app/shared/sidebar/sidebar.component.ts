import { UserService } from './../../user/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  slide = true;
  isAuthenticated = false;
  userSub: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSub = this.userService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  menuOpen(): void {
    this.slide = !this.slide;
  }
  onLogout() {
    this.userService.logout();
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
