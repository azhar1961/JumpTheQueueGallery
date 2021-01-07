import { ApiPropertyOptional } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsOptional, MaxLength } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../../../core/user/model/entities/user.entity';
import { Event } from '../../../event/model/entities/event.entity';
import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';

@Entity()
export class QueueDetail extends BaseEntity {

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: false })
    queueNumber?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: false })
    minEstimatedTime?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: true })
    creationTime?: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @ManyToOne(() => User, User => User.id)
    // @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user?: User;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @ManyToOne(() => Event, Event => Event.id)
    // @JoinColumn({ name: 'event_id', referencedColumnName: 'id' })
    event?: Event;

}
