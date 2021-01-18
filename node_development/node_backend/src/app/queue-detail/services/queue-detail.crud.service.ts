import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../core/user/model/entities/user.entity';
import { Event } from '../../event/model/entities/event.entity';
import { EventCrudService } from '../../event/services/event.crud.service';
import { QueueDetail } from '../model/entities/queue-detail.entity';
import { queueDetailDTO } from '../model/entities/queueDetail.dto';


@Injectable()
export class QueueDetailCrudService {


  constructor(@InjectRepository(QueueDetail) private readonly queueRepo: Repository<QueueDetail>, @InjectRepository(Event) private readonly eventRepo: Repository<Event>
    , @InjectRepository(User) private readonly userRepo: Repository<User>, public eventService: EventCrudService) { }

  //make the visitor join the Queue
  //input: queueDetailDTO(visitorId and eventId), Output: saved QueueDetail
  async joinQueue(queueDTO: queueDetailDTO) {
    const userId = queueDTO.visitorId;
    const eventId = queueDTO.eventId;
    var queueDetail: QueueDetail = new QueueDetail();
    var event: Event = new Event();
    await this.queueRepo.find({ where: { idEvent: eventId, idUser: userId } }).then(data => {
      if (data.length === 0) {

        this.queueRepo.find({ where: { idEvent: eventId } }).then(data => {
          if (data.length === 0) {
            queueDetail.queueNumber = 'Q001';
          } else {
            queueDetail.queueNumber = this.generateQueueNumber(data);
          }
        });
      } else {
        return data[0];
      }
    });
    await this.eventRepo.findOne(eventId).then(data => {

      if (data != null) {
        queueDetail.idEvent = data.id;
        const visitor_Count = data.visitorCount;
        queueDetail.minEstimatedTime = this.calculateMinimumEstimatedTime(visitor_Count);
      }
    });

    await this.userRepo.findOne(userId).then(data => {
      if (data != null) {
        queueDetail.idUser = data.id;
      }
    });

    const savedQueueDetail = await this.queueRepo.save(queueDetail);
    await this.eventRepo.findOne(eventId).then(data => {
      if (data != null) {
        const visitor_Count = data.visitorCount;
        const visitor_count = visitor_Count + 1;
        data.visitorCount = visitor_count;
        event.visitorCount = data.visitorCount;
        event = data;
        this.eventRepo.save(event);
        this.eventRepo.save(data);
      }
    });

    //  this.eventService.increaseVisitorCount(eventId);
    return savedQueueDetail;

  }

  //generates Queue Number for the Queue Detail
  //input: QueueDetail[], output: new Queue Number for the QueueDetail
  generateQueueNumber(queueData: QueueDetail[]) {
    const lastQueueDetail = queueData[queueData.length - 1];
    const lastQueueNumber = Number(lastQueueDetail.queueNumber?.substring(2));
    const updatedQueueNumber = lastQueueNumber + 1;
    const stringPart = updatedQueueNumber.toString();
    const newQueueNumber = "Q00" + stringPart;
    return newQueueNumber;
  }


  //calculates minimum estimated time for the visitor's turn to come in the queue
  //input: visitorCount inside the event, output: estimated time for the visitors turn to come
  calculateMinimumEstimatedTime(visitorCount: number) {
    const minimumAttentionTime = "5 minutes";
    var integerPart = Number(minimumAttentionTime.substring(0, 1));
    var calculatedEstimatedTime = integerPart * visitorCount;
    console.log("after calculating minimum estimated time " + calculatedEstimatedTime);
    var calculatedOutput = calculatedEstimatedTime.toString();
    return calculatedOutput;
  }

  //make the person leave the queue and deletes the queue detail from the repository
  //input: Queue Id,
  async leaveQueue(queueId: number): Promise<any> {
    await this.queueRepo.findOne(queueId).then(data => {
      if (data != null) {
        console.log(data);
        const event: Event | any = data.idEvent;
        this.eventRepo.findOne(event.id).then(data => {
          if (data != null) {
            console.log(data);
            const existingVisitorCount = data.visitorCount;
            console.log(existingVisitorCount);
            const decreasedVisitorCount = data.visitorCount - 1;
            console.log(decreasedVisitorCount);
            data.visitorCount = decreasedVisitorCount;
            this.eventRepo.save(data);

          }
        });
        this.queueRepo.delete(queueId);
      }
    });

  }

  //get all the Queue Detail from repository
  //input:none, output: all Queue Details from the repository.
  async getQueueDetails(): Promise<QueueDetail[]> {
    return await this.queueRepo.find();
  }


}
