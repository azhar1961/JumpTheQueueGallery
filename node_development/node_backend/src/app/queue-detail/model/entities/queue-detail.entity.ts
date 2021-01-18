import { ApiPropertyOptional } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsOptional, MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
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
    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'idUser', referencedColumnName: 'id' })
    idUser?: number;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @ManyToOne(() => Event, { eager: true })
    @JoinColumn({ name: 'idEvent', referencedColumnName: 'id' })
    idEvent?: number;

}
