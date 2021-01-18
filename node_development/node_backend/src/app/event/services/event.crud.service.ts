import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Event } from '../model/entities/event.entity';

@Injectable()
export class EventCrudService extends TypeOrmCrudService<Event> {
  constructor(@InjectRepository(Event) repo: Repository<Event>) {
    super(repo);
  }

  async increaseVisitorCount(eventId: number) {
    console.log(eventId);
    // await this.repo.findOne(eventId).then(data => {
    //   if (data != null) {
    //     var visitor_count = data.visitorCount;
    //     console.log(visitor_count);
    //     var incr_visitor_count = visitor_count + 1;
    //     console.log(incr_visitor_count);
    //     data.visitorCount = incr_visitor_count;
    //     console.log(data.visitorCount);
    //     return incr_visitor_count;
    //   }
    // }
    // );

  }

  async decreaseVisitorCount(eventId: number) {
    console.log(eventId);
    // await this.repo.findOne(eventId).then(data => {
    //   if (data != null) {
    //     const decreasedVisitorCount = data.visitorCount - 1;
    //     data.visitorCount = decreasedVisitorCount;
    //     console.log(decreasedVisitorCount);
    //     return decreasedVisitorCount;
    //   }
    // });
  }

}
