import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { QueueDetail } from '../model/entities/queue-detail.entity';
export declare class QueueDetailCrudService extends TypeOrmCrudService<QueueDetail> {
    constructor(repo: Repository<QueueDetail>);
}
