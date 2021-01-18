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
   event:any;
   queueDetail:any;
   asyncResult:any;
   

  constructor(private router:Router,private showQueueService:ShowqueueService) { }



  ngOnInit(): void {
    this.queueDetail=JSON.parse(localStorage.getItem('currentQueueDetail'));
    this.event=JSON.parse(localStorage.getItem('currentEvent'));
    this.minEstimatedTime=parseInt(this.queueDetail.minEstimatedTime)*60;
    
    }

    goBackToEvents(){
      this.router.navigate(['/events']);
    }

   async leaveQueue(){
     console.log("inside Leave Queue");
     console.log(this.queueDetail.id);
     this.asyncResult=await this.showQueueService.deleteQueue(this.queueDetail.id).toPromise();
     console.log("after deleting queue detail of  "+this.queueDetail.id);
     this.router.navigate(['/events']);
     localStorage.removeItem('currentQueueDetail');
     localStorage.removeItem('currentEvent');
     let visitor=JSON.parse(localStorage.getItem('LoggedInUser'));
     localStorage.removeItem('queueDetail_'+this.event.id+'_'+visitor.id);
    }

}
