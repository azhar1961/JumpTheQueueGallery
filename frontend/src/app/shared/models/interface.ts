export class Visitor{
    id?:number;
    username:string;
    name:string;
    phoneNumber:string;
    password:string;
    acceptedCommercial:boolean;
    acceptedTerms:boolean;
    userType: boolean;

    constructor(){

    }
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
pageable: Pageable;
visitorId?: Number;
eventId?: string;
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
logo: string;
startDate:string;
endDate:string;
location:string;
description:string;
currentNumber: string;
attentionTime: string;
visitorCount:number;
isJoined:boolean;
}

