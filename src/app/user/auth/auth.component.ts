import { IUser } from './../../shared/interfaces/user';
import { UserService } from '../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('f', { static: false }) authForm: NgForm;
  isLoginMode = true;
  isLoading = false;

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.authForm.reset();
  }
  onSubmit(form: NgForm): any {
    let authObs: Observable<IUser>;
    this.isLoading = true;

    if(this.isLoginMode){
      authObs = this.user.login(form.value.email, form.value.password);
    }
    else {
      authObs = this.user.signup(form.value.name, form.value.email, form.value.password, form.value.cPassword);
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      errorMessage => {
        console.log(errorMessage);
       // this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
