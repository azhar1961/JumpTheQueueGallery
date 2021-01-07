import { Module } from '@nestjs/common';
import { QueueDetail } from './model/entities/queue-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueDetailCrudService } from './services/queue-detail.crud.service';
import { QueueDetailCrudController } from './controllers/queue-detail.crud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QueueDetail])],
  providers: [QueueDetailCrudService],
  controllers: [QueueDetailCrudController],
})
export class QueueDetailModule {}
