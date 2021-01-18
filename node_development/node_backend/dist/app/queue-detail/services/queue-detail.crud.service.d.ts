import { Repository } from 'typeorm';
import { User } from '../../core/user/model/entities/user.entity';
import { Event } from '../../event/model/entities/event.entity';
import { EventCrudService } from '../../event/services/event.crud.service';
import { QueueDetail } from '../model/entities/queue-detail.entity';
import { queueDetailDTO } from '../model/entities/queueDetail.dto';
export declare class QueueDetailCrudService {
    private readonly queueRepo;
    private readonly eventRepo;
    private readonly userRepo;
    eventService: EventCrudService;
    constructor(queueRepo: Repository<QueueDetail>, eventRepo: Repository<Event>, userRepo: Repository<User>, eventService: EventCrudService);
    joinQueue(queueDTO: queueDetailDTO): Promise<QueueDetail>;
    generateQueueNumber(queueData: QueueDetail[]): string;
    calculateMinimumEstimatedTime(visitorCount: number): string;
    leaveQueue(queueId: number): Promise<any>;
    getQueueDetails(): Promise<QueueDetail[]>;
}
