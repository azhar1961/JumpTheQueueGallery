import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterEvent, JoinCriteria, Pageable, Visitor } from '../../models/interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventId:number;
  visitorId:number;
  
  private baseUrl=environment.baseUrlRestServices;
  constructor(private http:HttpClient) { }
  

  
  
 getEvents():Observable<any>{
  
  return this.http.post<any>(`${this.baseUrl}` + '/eventmanagement/v1/event/search', {})
   
}

getTheQueueDetail(criteria:JoinCriteria):Observable<any>{
  return this.http.post<any>(`${this.baseUrl}`+'/queuedetailmanagement/v1/queuedetail/',criteria)
}

}

