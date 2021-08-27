import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject} from 'rxjs';
import { environment } from '../../environments/environment';

import { IUser } from './../shared/interfaces/user';
import { User } from './user.model';
const apiUrl = environment.apiUrl;
@Injectable({ providedIn: 'root' })
export class UserService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    ) {}

  signup(name: string, email: string, password: string, cPassword: string){

    return this.http
      .post<IUser>(
        `${apiUrl}register`,
        {
          name,
          email,
          password,
          cPassword
        }
      )
      .pipe(
        catchError(this.handleError),
        map((resData:any )=> {
          return resData.data;
        }),
        tap(resData => {
          this.handleAuthentication(
            resData.name,
            resData.id,
            resData.token,
            resData.isAdmin
          );
        })
      );
  }

  login (email: string, password: string){
    return this.http
      .post<IUser>(
        `${apiUrl}login`,
        {
          email,
          password
        }
      )
      .pipe(
        catchError(this.handleError),
        map((resData:any )=> {
          return resData.data;
        }),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.id,
            resData.token,
            resData.isAdmin
          );
        })
      );
  }

  autoLogin(){
    const userData: {
      email: string;
      id: string;
      token: string;
      isAdmin: boolean;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData.token,
      userData.isAdmin
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  logout(): void{
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number): void{
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    isAdmin: boolean
  ) {
    const user = new User(email, userId, token, isAdmin);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error) {
      return throwError(errorMessage);
    }else{
      errorMessage = errorRes.error.message
    }
    switch (errorRes.error.data.error) {
      case 'INCORRECT':
        errorMessage = 'Incorrect email or password.';
        break;
    }
    return throwError(errorMessage);
  }
}
