import { QueueDetail } from '../model/entities/queue-detail.entity';
import { QueueDetailCrudService } from '../services/queue-detail.crud.service';
import { queueDetailDTO } from '../model/entities/queueDetail.dto';
export declare class QueueDetailCrudController {
    queueDetailservice: QueueDetailCrudService;
    constructor(queueDetailservice: QueueDetailCrudService);
    joinQueue(queueDTO: queueDetailDTO): Promise<QueueDetail>;
    leaveQueue(queueId: number): Promise<QueueDetail>;
    getQueueDetails(): Promise<QueueDetail[]>;
}
