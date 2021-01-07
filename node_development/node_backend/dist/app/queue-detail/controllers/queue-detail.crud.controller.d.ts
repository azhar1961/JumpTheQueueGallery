import { QueueDetail } from '../model/entities/queue-detail.entity';
import { QueueDetailCrudService } from '../services/queue-detail.crud.service';
export declare class QueueDetailCrudController {
    queueDetailservice: QueueDetailCrudService;
    constructor(queueDetailservice: QueueDetailCrudService);
    saveQueueDetail(queueDetail: QueueDetail): Promise<void>;
}
