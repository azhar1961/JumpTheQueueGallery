import { ApiPropertyOptional } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsOptional, MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';

@Entity()
export class Event extends BaseEntity {

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: false })
    eventName!: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { nullable: true })
    startDate!: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { nullable: true })
    endDate!: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: false })
    location!: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { length: 255, nullable: false })
    description!: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @MaxLength(255)
    @Column('varchar', { nullable: false })
    attentionTime!: string;

    @ApiPropertyOptional()
    @IsDefined({ groups: [CrudValidationGroups.CREATE] })
    @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
    @Column('int', { default: 0, nullable: false })
    visitorCount!: number;



}
