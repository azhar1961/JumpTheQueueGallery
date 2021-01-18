import { Module } from '@nestjs/common';
import { QueueDetail } from './model/entities/queue-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueDetailCrudService } from './services/queue-detail.crud.service';
import { QueueDetailCrudController } from './controllers/queue-detail.crud.controller';
import { Event } from '../event/model/entities/event.entity';
import { User } from '../core/user/model/entities/user.entity';
import { EventCrudService } from '../event/services/event.crud.service';

@Module({
  imports: [TypeOrmModule.forFeature([QueueDetail, Event, User])],
  providers: [QueueDetailCrudService, EventCrudService],
  controllers: [QueueDetailCrudController],
})
export class QueueDetailModule { }
