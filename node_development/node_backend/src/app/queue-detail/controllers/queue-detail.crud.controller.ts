import { Body, Controller, Post } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { QueueDetail } from '../model/entities/queue-detail.entity';
import { QueueDetailCrudService } from '../services/queue-detail.crud.service';


@Crud({
  model: {
    type: QueueDetail,
  },
})
@CrudType(QueueDetail)
@Controller('queue-detail/queue-details')
export class QueueDetailCrudController {
  constructor(public queueDetailservice: QueueDetailCrudService) { }


  @Post('saveQueueDetail')
  async saveQueueDetail(@Body() queueDetail: QueueDetail) {
    console.log(queueDetail);

    //   return await this.queueDetailservice.saveQueueDetail(queueDetail);
    // }

  }
}
