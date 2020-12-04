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

  
  constructor(private http:HttpClient) { }

  joinQueue(criteria:JoinCriteria):Observable<any>{
    return this.http.post<any>('http://localhost:8081/jtqbackend/services/rest/queuedetailmanagement/v1/queuedetail/',criteria)
  }
}
