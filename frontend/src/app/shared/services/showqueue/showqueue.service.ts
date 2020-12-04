import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowqueueService {

  constructor(private http:HttpClient) { }


  deleteQueue(queueDetailId:number):Observable<any>{
  return this.http.delete<any>('http://localhost:8081/jtqbackend/services/rest/queuedetailmanagement/v1/queuedetail/'+queueDetailId);
  
  }
}
