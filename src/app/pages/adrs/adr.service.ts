import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { IAdr } from '../../shared/interfaces';
@Injectable()
export class AdrService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAdrs(): Observable<IAdr[]> {
    const response = this.http.get<IAdr[]>(`${this.apiUrl}/adr`);
    console.log(response);
    return response;
  }

  getAdr(id: string): Observable<IAdr> {
    return this.http.get<IAdr>(`${this.apiUrl}/adr/${id}`);
  }

}
