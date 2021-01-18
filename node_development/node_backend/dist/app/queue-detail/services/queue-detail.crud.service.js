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
exports.QueueDetailCrudService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../core/user/model/entities/user.entity");
const event_entity_1 = require("../../event/model/entities/event.entity");
const event_crud_service_1 = require("../../event/services/event.crud.service");
const queue_detail_entity_1 = require("../model/entities/queue-detail.entity");
let QueueDetailCrudService = class QueueDetailCrudService {
    constructor(queueRepo, eventRepo, userRepo, eventService) {
        this.queueRepo = queueRepo;
        this.eventRepo = eventRepo;
        this.userRepo = userRepo;
        this.eventService = eventService;
    }
    async joinQueue(queueDTO) {
        const userId = queueDTO.visitorId;
        const eventId = queueDTO.eventId;
        var queueDetail = new queue_detail_entity_1.QueueDetail();
        var event = new event_entity_1.Event();
        await this.queueRepo.find({ where: { idEvent: eventId, idUser: userId } }).then(data => {
            if (data.length === 0) {
                this.queueRepo.find({ where: { idEvent: eventId } }).then(data => {
                    if (data.length === 0) {
                        queueDetail.queueNumber = 'Q001';
                    }
                    else {
                        queueDetail.queueNumber = this.generateQueueNumber(data);
                    }
                });
            }
            else {
                return data[0];
            }
        });
        await this.eventRepo.findOne(eventId).then(data => {
            if (data != null) {
                queueDetail.idEvent = data.id;
                const visitor_Count = data.visitorCount;
                queueDetail.minEstimatedTime = this.calculateMinimumEstimatedTime(visitor_Count);
            }
        });
        await this.userRepo.findOne(userId).then(data => {
            if (data != null) {
                queueDetail.idUser = data.id;
            }
        });
        const savedQueueDetail = await this.queueRepo.save(queueDetail);
        await this.eventRepo.findOne(eventId).then(data => {
            if (data != null) {
                const visitor_Count = data.visitorCount;
                const visitor_count = visitor_Count + 1;
                data.visitorCount = visitor_count;
                event.visitorCount = data.visitorCount;
                event = data;
                this.eventRepo.save(event);
                this.eventRepo.save(data);
            }
        });
        return savedQueueDetail;
    }
    generateQueueNumber(queueData) {
        var _a;
        const lastQueueDetail = queueData[queueData.length - 1];
        const lastQueueNumber = Number((_a = lastQueueDetail.queueNumber) === null || _a === void 0 ? void 0 : _a.substring(2));
        const updatedQueueNumber = lastQueueNumber + 1;
        const stringPart = updatedQueueNumber.toString();
        const newQueueNumber = "Q00" + stringPart;
        return newQueueNumber;
    }
    calculateMinimumEstimatedTime(visitorCount) {
        const minimumAttentionTime = "5 minutes";
        var integerPart = Number(minimumAttentionTime.substring(0, 1));
        var calculatedEstimatedTime = integerPart * visitorCount;
        console.log("after calculating minimum estimated time " + calculatedEstimatedTime);
        var calculatedOutput = calculatedEstimatedTime.toString();
        return calculatedOutput;
    }
    async leaveQueue(queueId) {
        await this.queueRepo.findOne(queueId).then(data => {
            if (data != null) {
                console.log(data);
                const event = data.idEvent;
                this.eventRepo.findOne(event.id).then(data => {
                    if (data != null) {
                        console.log(data);
                        const existingVisitorCount = data.visitorCount;
                        console.log(existingVisitorCount);
                        const decreasedVisitorCount = data.visitorCount - 1;
                        console.log(decreasedVisitorCount);
                        data.visitorCount = decreasedVisitorCount;
                        this.eventRepo.save(data);
                    }
                });
                this.queueRepo.delete(queueId);
            }
        });
    }
    async getQueueDetails() {
        return await this.queueRepo.find();
    }
};
QueueDetailCrudService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(queue_detail_entity_1.QueueDetail)), __param(1, typeorm_1.InjectRepository(event_entity_1.Event)),
    __param(2, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository,
        typeorm_2.Repository, event_crud_service_1.EventCrudService])
], QueueDetailCrudService);
exports.QueueDetailCrudService = QueueDetailCrudService;
//# sourceMappingURL=queue-detail.crud.service.js.map