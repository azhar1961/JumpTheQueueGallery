import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Event, JoinCriteria, QueueDetail, Visitor} from '../shared/models/interface'
import { EventsService } from '../shared/services/events/events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:Array<any>;
  visitor:Visitor;
  queudetail:QueueDetail;
  currentEvent:Event;
  joinCriteria:JoinCriteria=new JoinCriteria();
  joinedEvent:Event;
  visitortoken:Visitor;
  constructor(private router:Router,private eventService:EventsService) { }
  
  
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
  }
  else{
    localStorage.setItem('currentEvent',JSON.stringify(event));   
    this.router.navigate(['/joinqueue']);
    // this.joinedEvent=JSON.parse(localStorage.getItem('currentEvent'));
    // this.joinCriteria.eventId=this.joinedEvent.id;
    // this.joinCriteria.visitorId=this.visitortoken.id;
    // this.eventService.getTheQueueDetail(this.joinCriteria).subscribe(
    //   data=>{
    //     this.queudetail=data;
    //     if(this.queudetail==null){
    //       this.router.navigate(['/joinqueue']);
    //     }else{
    //       this.router.navigate(['/showqueue']);
    //     }
    //   }
    // )
  }
 }
}
  //  localStorage.setItem('currentEvent',JSON.stringify(event)); 
  //  this.event=JSON.parse(localStorage.getItem('currentEvent'));
  //  //this.visitortoken=JSON.parse(localStorage.getItem('visitorLoggedIn'));
  //  //this.router.navigate(['/joinqueue']);
  //  this.eventService.checkExistingUser(this.event.id,this.visitortoken.id).subscribe(
  //   data=>{
  //     if(data==true){
  //       this.router.navigate(['/showqueue']);
  //     }
  //     else{
  //       this.router.navigate(['/joinqueue']);
  //     }
  //   }
  //  )
  // }
  
   

//  this.currentEvent=JSON.parse(localStorage.getItem('currentEvent'));
//  this.queudetail=JSON.parse(localStorage.getItem('currentQueueDetail'));
//  this.visitortoken=JSON.parse(localStorage.getItem('visitorLoggedIn')) ;
//  if(this.visitortoken==null){
//    this.router.navigate(['/login']);
//  }
//  else{
//    if((this.visitortoken.id==this.queudetail.visitorId) && (this.currentEvent.id==this.queudetail.eventId)){
//      this.router.navigate(['/showqueue']);
//    }
//    else{
//     localStorage.setItem('currentEvent',JSON.stringify(event));   
//     this.router.navigate(['/joinqueue']);
//    }
  
 
    
  


 
