import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event, FilterQueueDetail, JoinCriteria, QueueDetail, Visitor } from '../shared/models/interface'
import { EventsService } from '../shared/services/events/events.service';
import { IsJoinedQueueService } from '../shared/services/isJoinedQueue/is-joined-queue.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Array<Event>;
  userToken: Visitor;
  currentEvent: Event = new Event();
  queueDetail: QueueDetail = new QueueDetail();
  queueDetailFilter: FilterQueueDetail = new FilterQueueDetail;
  asyncResult: any;
  constructor(private router: Router, private eventService: EventsService, private isJoinedQueueService: IsJoinedQueueService) { }


  ngOnInit(): void {

    this.getAllTheEvents();

  }

  async getAllTheEvents() {
    this.asyncResult = await this.eventService.getEvents().toPromise();
    this.events = this.asyncResult;
    localStorage.setItem("events", JSON.stringify(this.events));
    console.log('Response Received.');
    console.log(this.events);
  }

  goToEvent(event: any) {
    this.userToken = JSON.parse(localStorage.getItem('LoggedInUser'));
    if (this.userToken == null) {
      this.router.navigate(['/login']);
    } else {
      localStorage.setItem("currentEvent", JSON.stringify(event));
      let currentQueueDetail = localStorage.getItem('currentQueueDetail');
      if (currentQueueDetail!=null) {
        let currentlyJoinedData = (localStorage.getItem('queueDetail_' + JSON.stringify(event.id) + '_' + JSON.stringify(this.userToken.id)));
        if (currentlyJoinedData != null) {
          this.router.navigate(['/showqueue']);
        }
        else {
          this.router.navigate(['/joinqueue']);
        }
      }
      else {
        this.router.navigate(['/joinqueue']);
      }

    }
  }
}











