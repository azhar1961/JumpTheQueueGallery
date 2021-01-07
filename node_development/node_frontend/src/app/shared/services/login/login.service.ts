import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FilterVisitor, LogInVisitor, Pageable, Sort, Visitor } from '../../models/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginVisitor:Visitor=new Visitor();
  private baseUrl = environment.baseUrlRestServices;
  constructor(private http:HttpClient) { }

  login(loginVisitor:LogInVisitor):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`+'/auth/login/',loginVisitor);
  }
}

