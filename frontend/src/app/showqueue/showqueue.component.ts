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
   currentlyAttendedQueueNumber="Q001";
   minEstimatedTime:number;

  constructor(private router:Router,private showQueueService:ShowqueueService) { }

event:any;
queueDetail:any;

  ngOnInit(): void {
    this.queueDetail=JSON.parse(localStorage.getItem('currentQueueDetail'));
    this.event=JSON.parse(localStorage.getItem('currentEvent'));
    this.minEstimatedTime=parseInt(this.queueDetail.minEstimatedTime)*60;
    //console.log(this.minEstimatedTime);
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
