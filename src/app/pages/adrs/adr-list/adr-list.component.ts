import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/user/user.service';
import { IAdr } from './../../../shared/interfaces/adr';
import { AdrService } from './../adr.service';
@Component({
  selector: 'app-adr-list',
  templateUrl: './adr-list.component.html',
  styleUrls: ['./adr-list.component.css']
})
export class AdrListComponent implements OnInit, OnDestroy {

  adrs: IAdr;
  isAdmin: boolean;
  subs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adrService: AdrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.adrService.getAdrs().subscribe(response => {
      this.adrs = response.data;
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
    this.adrService.deleteAdr(id).subscribe();
  }
  onNewAdr(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
