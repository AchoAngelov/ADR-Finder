import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { UserService } from './../../user/user.service';
import { ICategory } from '../../shared/interfaces';
import { map, tap } from 'rxjs/operators';
const apiUrl = environment.apiUrl;
@Injectable()
export class CategoryService {
  category = new Subject<ICategory>();
  constructor(
    private http: HttpClient,
    private userService: UserService
    ) {}

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
  getCategories(): any {
    const  headers = this.getHeaderToken();
    return this.http.get<ICategory>(`${apiUrl}adr-classes`, { headers })
    .pipe(tap(
      category => {
        this.category.next(category);
      }
    ));
  }
  addCategory(category: ICategory): any {
    const  headers = this.getHeaderToken();
    return this.http.post<ICategory[]>(`${apiUrl}adr-classes`, category, { headers });

  }
  getCategory(id: number): Observable<ICategory>{
    const  headers = this.getHeaderToken();
    return this.http.get<any>(`${apiUrl}adr-classes/${id}`, { headers }).pipe(map(response => {
      return response.data;
    }));
  }
  editCategory(category, id: number): Observable<ICategory>{
    const  headers = this.getHeaderToken();
    return this.http.put<any>(`${apiUrl}adr-classes/${id}`, category, { headers }).pipe(map(response => {
      return response.data;
    }));
  }

}
