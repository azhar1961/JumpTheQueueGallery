"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_entity_1 = require("../../../shared/model/entities/base-entity.entity");
let Event = class Event extends base_entity_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { eventName: { required: true, type: () => String, maxLength: 255 }, startDate: { required: true, type: () => String, maxLength: 255 }, endDate: { required: true, type: () => String, maxLength: 255 }, location: { required: true, type: () => String, maxLength: 255 }, description: { required: true, type: () => String, maxLength: 255 }, attentionTime: { required: true, type: () => String, maxLength: 255 }, visitorCount: { required: true, type: () => Number } };
    }
};
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "eventName", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "startDate", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Event.prototype, "endDate", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { nullable: false }),
    __metadata("design:type", String)
], Event.prototype, "attentionTime", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('int', { default: 0, nullable: false }),
    __metadata("design:type", Number)
], Event.prototype, "visitorCount", void 0);
Event = __decorate([
    typeorm_1.Entity()
], Event);
exports.Event = Event;
//# sourceMappingURL=event.entity.js.map