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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueDetailCrudController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const serializer_1 = require("@devon4node/common/serializer");
const queue_detail_entity_1 = require("../model/entities/queue-detail.entity");
const queue_detail_crud_service_1 = require("../services/queue-detail.crud.service");
let QueueDetailCrudController = class QueueDetailCrudController {
    constructor(queueDetailservice) {
        this.queueDetailservice = queueDetailservice;
    }
    async saveQueueDetail(queueDetail) {
        console.log(queueDetail);
    }
};
__decorate([
    common_1.Post('saveQueueDetail'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queue_detail_entity_1.QueueDetail]),
    __metadata("design:returntype", Promise)
], QueueDetailCrudController.prototype, "saveQueueDetail", null);
QueueDetailCrudController = __decorate([
    crud_1.Crud({
        model: {
            type: queue_detail_entity_1.QueueDetail,
        },
    }),
    serializer_1.CrudType(queue_detail_entity_1.QueueDetail),
    common_1.Controller('queue-detail/queue-details'),
    __metadata("design:paramtypes", [queue_detail_crud_service_1.QueueDetailCrudService])
], QueueDetailCrudController);
exports.QueueDetailCrudController = QueueDetailCrudController;
//# sourceMappingURL=queue-detail.crud.controller.js.map