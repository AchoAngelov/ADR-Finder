import { UserService } from './../../user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { ICategory } from '../../shared/interfaces';
const apiUrl = environment.apiUrl;

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  getCategories(): any {
    let token = '';
    this.userService.user.subscribe(userData => {
      if(userData){
        token = userData.token;
      }
    })
    const headers = new HttpHeaders({
      Authorization : `Bearer ${token}`
    });
    return this.http.get<ICategory[]>(`${apiUrl}adr-classes`, { headers });
  }
  addCategory(category: ICategory): any {
    return this.http.post<ICategory[]>(`${apiUrl}/adr-classes`, category);

  }
  getCategory(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`${apiUrl}/adr-classes/${id}`);
  }

}
