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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const base_entity_entity_1 = require("../../../../shared/model/entities/base-entity.entity");
const roles_enum_1 = require("../../../auth/model/roles.enum");
let User = class User extends base_entity_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String, maxLength: 255 }, name: { required: false, type: () => String, maxLength: 255 }, phoneNumber: { required: false, type: () => String, maxLength: 255 }, password: { required: true, type: () => String, maxLength: 255 }, acceptedCommercial: { required: false, type: () => Number }, acceptedTerms: { required: false, type: () => Number }, role: { required: true, type: () => Number } };
    }
};
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    class_validator_1.MaxLength(255),
    typeorm_1.Column('varchar', { length: 255, nullable: false }),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('int', { nullable: true, default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "acceptedCommercial", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('int', { nullable: true, default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "acceptedTerms", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsDefined({ groups: [crud_1.CrudValidationGroups.CREATE] }),
    class_validator_1.IsOptional({ groups: [crud_1.CrudValidationGroups.UPDATE] }),
    typeorm_1.Column('int', { nullable: false, default: roles_enum_1.roles.USER }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map