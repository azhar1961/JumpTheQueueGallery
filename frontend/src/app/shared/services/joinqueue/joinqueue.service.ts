import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JoinCriteria } from '../../models/interface';


@Injectable({
  providedIn: 'root'
})
export class JoinqueueService {

  private baseUrl=environment.baseUrlRestServices;
  constructor(private http:HttpClient) { }

  joinQueue(criteria:JoinCriteria):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`+'/queuedetailmanagement/v1/queuedetail/',criteria)
  }
}
