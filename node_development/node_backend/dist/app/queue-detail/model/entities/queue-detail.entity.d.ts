import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';
export declare class QueueDetail extends BaseEntity {
    queueNumber?: string;
    minEstimatedTime?: string;
    idUser?: number;
    idEvent?: number;
}
