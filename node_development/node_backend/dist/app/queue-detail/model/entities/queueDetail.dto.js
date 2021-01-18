"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueDetailDTO = void 0;
const openapi = require("@nestjs/swagger");
class queueDetailDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { eventId: { required: true, type: () => Number }, visitorId: { required: true, type: () => Number } };
    }
}
exports.queueDetailDTO = queueDetailDTO;
//# sourceMappingURL=queueDetail.dto.js.map