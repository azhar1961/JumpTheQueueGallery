
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JoinCriteria, Event, QueueDetail, Visitor } from '../shared/models/interface';
import { IsJoinedQueueService } from '../shared/services/isJoinedQueue/is-joined-queue.service';
import { JoinqueueService } from '../shared/services/joinqueue/joinqueue.service';


@Component({
  selector: 'app-joinqueue',
  templateUrl: './joinqueue.component.html',
  styleUrls: ['./joinqueue.component.css']
})
export class JoinqueueComponent implements OnInit {
  currentlyAvailableQueue: string="Q123";
  constructor(private router:Router,private joinQueueService:JoinqueueService,private isjoinedQueueService:IsJoinedQueueService) { }

 
  queueDetail:any;
  criteria:JoinCriteria=new JoinCriteria();
  visitor:Visitor=new Visitor();
  event:Event=new Event();
  asyncResult:any;
  currentlyJoinedEvent:any;

  ngOnInit(): void {
    
     this.event=JSON.parse(localStorage.getItem('currentEvent'));
     console.log(localStorage.getItem('LoggedInUser'));
     this.visitor=JSON.parse(localStorage.getItem('LoggedInUser')); 
     
  }

  goBackToEvents(){
    
    this.router.navigate(['/events']);
  }

  async joinQueue(){
    this.criteria.eventId=this.event.id;
    console.log(this.criteria);
    this.criteria.visitorId=this.visitor.id;
    console.log(this.criteria);
    this.asyncResult=<QueueDetail>await this.joinQueueService.joinQueue(this.criteria).toPromise();
    this.queueDetail=this.asyncResult;
    this.currentlyJoinedEvent=this.event.id+"_"+this.visitor.id;
    localStorage.setItem('currentQueueDetail',JSON.stringify(this.queueDetail));
    localStorage.setItem('queueDetail_'+(this.currentlyJoinedEvent),this.currentlyJoinedEvent);
    this.router.navigate(['/showqueue']);
   
  }
}
