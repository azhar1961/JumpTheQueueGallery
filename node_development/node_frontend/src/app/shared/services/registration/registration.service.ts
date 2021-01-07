import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Visitor } from '../../models/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl=environment.baseUrlRestServices;

  constructor(private http:HttpClient) {}
  
  register(visitor: Visitor): Observable<Visitor> {
    console.log('inside registerService');
    console.log(visitor);
    return this.http.post<Visitor>(`${this.baseUrl}` + '/auth/register',visitor);
    
  }
}
