import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    const response = this.http.get<ICategory[]>(`${apiUrl}/categories`);
    return response;
  }

  getCategory(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`${apiUrl}/categories/${id}`);
  }

}
