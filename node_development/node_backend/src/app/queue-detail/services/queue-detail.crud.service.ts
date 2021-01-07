import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { QueueDetail } from '../model/entities/queue-detail.entity';


@Injectable()
export class QueueDetailCrudService extends TypeOrmCrudService<QueueDetail> {

  constructor(@InjectRepository(QueueDetail) repo: Repository<QueueDetail>) {
    super(repo);

  }

  // async saveQueueDetail(queueDetail: QueueDetail): Promise<QueueDetail> {
  //    var userId: number = queueDetail.user?.id;
  //    var eventId: number = queueDetail.event?.id;
  //    console.log(userId + " " + eventId)
  //   const queueData = await this.repo
  //   if (queueData == null) {
  //     queueDetail.queueNumber = "Q001";
  //     queueDetail.minEstimatedTime = "5 minutes";
  //     queueDetail.creationTime = "14:00:06";
  //     return await this.repo.save(queueDetail);
  //   }
  //   else {
  //      return

  //   }
  // }

}
