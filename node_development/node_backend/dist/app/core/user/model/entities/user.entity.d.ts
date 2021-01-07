import { BaseEntity } from '../../../../shared/model/entities/base-entity.entity';
export declare class User extends BaseEntity {
    username: string;
    name?: string;
    phoneNumber?: string;
    password: string;
    acceptedCommercial?: number;
    acceptedTerms?: number;
    role: number;
}
