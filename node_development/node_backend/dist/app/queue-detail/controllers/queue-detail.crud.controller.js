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
const queueDetail_dto_1 = require("../model/entities/queueDetail.dto");
let QueueDetailCrudController = class QueueDetailCrudController {
    constructor(queueDetailservice) {
        this.queueDetailservice = queueDetailservice;
    }
    async joinQueue(queueDTO) {
        console.log(queueDTO);
        return await this.queueDetailservice.joinQueue(queueDTO);
    }
    async leaveQueue(queueId) {
        console.log(queueId + " before deleting it");
        return await this.queueDetailservice.leaveQueue(queueId);
    }
    async getQueueDetails() {
        return await this.queueDetailservice.getQueueDetails();
    }
};
__decorate([
    common_1.Post('joinQueue'),
    openapi.ApiResponse({ status: 201, type: require("../model/entities/queue-detail.entity").QueueDetail }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queueDetail_dto_1.queueDetailDTO]),
    __metadata("design:returntype", Promise)
], QueueDetailCrudController.prototype, "joinQueue", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("../model/entities/queue-detail.entity").QueueDetail }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QueueDetailCrudController.prototype, "leaveQueue", null);
__decorate([
    common_1.Get('getAllQueueDetails'),
    openapi.ApiResponse({ status: 200, type: [require("../model/entities/queue-detail.entity").QueueDetail] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueueDetailCrudController.prototype, "getQueueDetails", null);
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