import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Event, FilterQueueDetail, JoinCriteria, QueueDetail, Visitor} from '../shared/models/interface'
import { EventsService } from '../shared/services/events/events.service';
import { IsJoinedQueueService } from '../shared/services/isJoinedQueue/is-joined-queue.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:Array<any>;
  visitortoken:Visitor;
  currentEvent:Event=new Event();
  queueDetail:QueueDetail=new QueueDetail();
  queueDetailFilter:FilterQueueDetail=new FilterQueueDetail;
  constructor(private router:Router,private eventService:EventsService,private isJoinedQueueService:IsJoinedQueueService) { }
  
  
  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      data=>{
        this.events=data.content; 
        localStorage.setItem("events",JSON.stringify(this.events));
      }     
    )
    } 

goToEvent(event:any){
  this.visitortoken=JSON.parse(localStorage.getItem('visitorLoggedIn'));
  
  if(this.visitortoken==null){
    this.router.navigate(['/login']);
  }else{
    localStorage.setItem("currentEvent",JSON.stringify(event));
    this.router.navigate(['/joinqueue']);
  }
   
  
 }
}
  
  
   


 
    
  


 
