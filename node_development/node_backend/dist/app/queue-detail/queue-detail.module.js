"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueDetailModule = void 0;
const common_1 = require("@nestjs/common");
const queue_detail_entity_1 = require("./model/entities/queue-detail.entity");
const typeorm_1 = require("@nestjs/typeorm");
const queue_detail_crud_service_1 = require("./services/queue-detail.crud.service");
const queue_detail_crud_controller_1 = require("./controllers/queue-detail.crud.controller");
let QueueDetailModule = class QueueDetailModule {
};
QueueDetailModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([queue_detail_entity_1.QueueDetail])],
        providers: [queue_detail_crud_service_1.QueueDetailCrudService],
        controllers: [queue_detail_crud_controller_1.QueueDetailCrudController],
    })
], QueueDetailModule);
exports.QueueDetailModule = QueueDetailModule;
//# sourceMappingURL=queue-detail.module.js.map