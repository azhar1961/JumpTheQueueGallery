import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowqueueService {

  private baseUrl=environment.baseUrlRestServices;
  constructor(private http:HttpClient) { }


  deleteQueue(queueDetailId:number):Observable<any>{
    console.log("inside deleteQueue service "+queueDetailId);
  return this.http.delete<any>(`${this.baseUrl}`+'/queue-detail/queue-details/'+queueDetailId);
  
  }
}
