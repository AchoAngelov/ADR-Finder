import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

import { UserService } from './../../user/user.service';
import { IAdr } from '../../shared/interfaces';
import { map, tap } from 'rxjs/operators';
@Injectable()
export class AdrService {

  apiUrl = environment.apiUrl;
  adr = new Subject<IAdr>();

  constructor(private http: HttpClient, private userService: UserService) { }

  getHeaderToken(): HttpHeaders {
    let token = '';
    this.userService.user.subscribe(userData => {
      if(userData){
        token = userData.token;
      }
    })
    const headers = new HttpHeaders({
      Authorization : `Bearer ${token}`
    });
    return headers;
  }

  getAdrs(): any {
    const  headers = this.getHeaderToken();
    return this.http.get<IAdr>(`${this.apiUrl}adr`, { headers })
    .pipe(tap(
      adr => {
        this.adr.next(adr);
      }
    ));
  }
  addAdr(adr: IAdr): any {
    const  headers = this.getHeaderToken();
    return this.http.post<IAdr>(`${this.apiUrl}adr`, adr, { headers });

  }
  getAdr(id: number): Observable<IAdr>{
    const  headers = this.getHeaderToken();
    return this.http.get<any>(`${this.apiUrl}adr/${id}`, { headers }).pipe(map(response => {
      return response.data;
    }));
  }
  editAdr(adr:IAdr, id: number): Observable<IAdr>{
    const  headers = this.getHeaderToken();
    return this.http.put<any>(`${this.apiUrl}adr/${id}`, adr, { headers }).pipe(map(response => {
      return response.data;
    }));
  }
  deleteAdr(id: number): Observable<IAdr>{
    const  headers = this.getHeaderToken();
    return this.http.delete<any>(`${this.apiUrl}adr/${id}`, { headers });
  }

}
