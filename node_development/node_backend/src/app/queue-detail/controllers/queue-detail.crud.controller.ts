import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { QueueDetail } from '../model/entities/queue-detail.entity';
import { QueueDetailCrudService } from '../services/queue-detail.crud.service';
import { queueDetailDTO } from '../model/entities/queueDetail.dto';



@Crud({
  model: {
    type: QueueDetail,
  },
})
@CrudType(QueueDetail)
@Controller('queue-detail/queue-details')
export class QueueDetailCrudController {
  constructor(public queueDetailservice: QueueDetailCrudService) { }


  @Post('joinQueue')
  async joinQueue(@Body() queueDTO: queueDetailDTO) {
    console.log(queueDTO);
    return await this.queueDetailservice.joinQueue(queueDTO);
  }

  @Delete(':id')
  async leaveQueue(@Param('id') queueId: number): Promise<QueueDetail> {
    console.log(queueId + " before deleting it");
    return await this.queueDetailservice.leaveQueue(queueId);
  }

  @Get('getAllQueueDetails')
  async getQueueDetails(): Promise<QueueDetail[]> {
    return await this.queueDetailservice.getQueueDetails();
  }
}

