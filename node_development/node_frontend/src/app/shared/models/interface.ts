export class Visitor{
    id?:number;
    username:string;
    name:string;
    phoneNumber:string;
    password:string;
    acceptedCommercial:boolean;
    acceptedTerms:boolean;
    role: number;

    constructor(){

    }
}

export class LogInVisitor{
   username:string;
   password:string;
   role:number;
}

export class FilterVisitor {
    pageable: Pageable;
    username?: string;
    password?: string;
}

export class Pageable {
    pageSize: number;
    pageNumber: number;
    sort?: Sort[];
}

export class Sort {
    property: string;
    direction: string;
}

export class Role {
    name: string;
    permission: number;

}

export class FilterQueueDetail {
visitorId?: Number;
eventId?: Number;
}

export class JoinCriteria {
visitorId?: number;
eventId?: number;
}

export class FilterEvent {
pageable: Pageable;
id?: number;
}
export class QueueDetail {
id?: number;
queueNumber: string;
creationTime: string;
startTime?: string;
endTime?: string;
minEstimatedTime:string;
visitorId: number;
eventId: number;
}

export class Event {
id?: number;
eventName: string;
startDate:string;
endDate:string;
location:string;
description:string;
attentionTime: string;
visitorCount:number;
isJoined:boolean;
}

