import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdr } from '../../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class AdrService {

  constructor(private http: HttpClient) { }

  getAdrs(): Observable<IAdr[]> {
    const response = this.http.get<IAdr[]>(`${apiUrl}/adrs`);
    return response;
  }

  getAdr(id: string): Observable<IAdr> {
    return this.http.get<IAdr>(`${apiUrl}/adrs/${id}`);
  }

}
