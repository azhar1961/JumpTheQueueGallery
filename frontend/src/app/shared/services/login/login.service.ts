import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FilterVisitor, Pageable, Sort, Visitor } from '../../models/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginVisitor:Visitor=new Visitor();
  private baseUrl = environment.baseUrlRestServices;
  constructor(private http:HttpClient) { }

  getVisitorByUsername(username: string): Observable<Visitor> {
    const filters: FilterVisitor = new FilterVisitor();
    const pageable: Pageable = new Pageable();
    
    pageable.pageNumber = 0;
    pageable.pageSize = 10;
    pageable.sort=[]
    filters.username = username;
    filters.pageable = pageable;
    return this.http.post<Visitor>(`${this.baseUrl}` + '/visitormanagement/v1/visitor/search', filters)
   .pipe(
        map(visitors => visitors['content'][0]),
    );
}
}

