import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsJoinedQueueService {

  isJoined:boolean=false;

  constructor() { }
}
