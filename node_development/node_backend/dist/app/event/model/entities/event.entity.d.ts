import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';
export declare class Event extends BaseEntity {
    eventName?: string;
    startDate?: string;
    endDate?: string;
    location?: string;
    description?: string;
    attentionTime?: string;
    visitorCount?: Number;
}
