import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterEvent, FilterQueueDetail, JoinCriteria,Visitor } from '../../models/interface';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventId:number;
  visitorId:number;
  
  private baseUrl=environment.baseUrlRestServices;
  constructor(private http:HttpClient) { }
  

  
  
 getEvents():Observable<Event[]>{
  console.log("get event service");
  return this.http.get<Event[]>(`${this.baseUrl}`+'/event/events');
   
}



}

