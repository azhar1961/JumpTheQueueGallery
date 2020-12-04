import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowqueueService } from '../shared/services/showqueue/showqueue.service';

@Component({
  selector: 'app-showqueue',
  templateUrl: './showqueue.component.html',
  styleUrls: ['./showqueue.component.css']
})
export class ShowqueueComponent implements OnInit {
   yourqueueNumber: any;
   currentlyAttendedQueueNumber="Q000";
   minEstimatedtime:any;
  constructor(private router:Router,private showQueueService:ShowqueueService) { }

event:any;
queueDetail:any;
token:any;
eventName:any;

  ngOnInit(): void {
    this.queueDetail=JSON.parse(localStorage.getItem('currentQueueDetail'));
    this.event=JSON.parse(localStorage.getItem('currentEvent'));
    }

    goBackToEvents(){
      this.router.navigate(['/events']);
    }

    leaveQueue(){
       this.showQueueService.deleteQueue(this.queueDetail.id).subscribe(
         data=>{
           this.router.navigate(['/events']);
           localStorage.removeItem('currentQueueDetail');
           localStorage.removeItem('currentEvent');
         }

       )
    }

}
