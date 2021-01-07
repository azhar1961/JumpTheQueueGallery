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
exports.QueueDetail = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../../core/user/model/entities/user.entity");
const event_entity_1 = require("../../../event/model/entities/event.entity");
const base_entity_entity_1 = require("../../../shared/model/entities/base-entity.entity");
let QueueDetail = class QueueDetail extends base_entity_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { queueNumber: { required: false, type: () => String, maxLength: 255 }, minEstimatedTime: { required: false, type: () => String, maxLength: 255 }, creationTime: { required: false, type: () => String, maxLength: 255 }, user: { required: false, type: () => require("../../../core/user/model/entities/user.entity").User }, event: { required: false, type: () => require("../../../event/model/entities/event.entity").Event } };
    }
};
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], QueueDetail.prototype, "queueNumber", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], QueueDetail.prototype, "minEstimatedTime", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], QueueDetail.prototype, "creationTime", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.ManyToOne(() => user_entity_1.User, User => User.id),
    __metadata("design:type", user_entity_1.User)
], QueueDetail.prototype, "user", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.ManyToOne(() => event_entity_1.Event, Event => Event.id),
    __metadata("design:type", event_entity_1.Event)
], QueueDetail.prototype, "event", void 0);
QueueDetail = __decorate([
    typeorm_1.Entity()
], QueueDetail);
exports.QueueDetail = QueueDetail;
//# sourceMappingURL=queue-detail.entity.js.map