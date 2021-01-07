import { User } from '../../../core/user/model/entities/user.entity';
import { Event } from '../../../event/model/entities/event.entity';
import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';
export declare class QueueDetail extends BaseEntity {
    queueNumber?: string;
    minEstimatedTime?: string;
    creationTime?: string;
    user?: User;
    event?: Event;
}
