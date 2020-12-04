import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JoinCriteria } from '../shared/models/interface';
import { JoinqueueService } from '../shared/services/joinqueue/joinqueue.service';


@Component({
  selector: 'app-joinqueue',
  templateUrl: './joinqueue.component.html',
  styleUrls: ['./joinqueue.component.css']
})
export class JoinqueueComponent implements OnInit {
  currentlyAvailableQueue: string="Q123";
  constructor(private router:Router,private joinQueueService:JoinqueueService) { }

  queueDetail:any;
  criteria:JoinCriteria=new JoinCriteria();
  visitor:any;
  event:any;
  eventName:any;
  ngOnInit(): void {
     this.event=JSON.parse(localStorage.getItem('currentEvent'));
     this.visitor=JSON.parse(localStorage.getItem('visitorLoggedIn')); 
  }

  goBackToEvents(){
    
    this.router.navigate(['/events']);
  }

  joinQueue(){

    this.criteria.eventId=this.event.id;
    this.criteria.visitorId=this.visitor.id;
    this.joinQueueService.joinQueue(this.criteria).subscribe(
      data=>{
        this.queueDetail=data;
        localStorage.setItem('currentQueueDetail',JSON.stringify(this.queueDetail));
        this.router.navigate(['/showqueue']);
      }
    )
  }
}
