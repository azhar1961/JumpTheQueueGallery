package com.devonfw.application.jtqbackend.queuedetailmanagement;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.devonfw.application.jtqbackend.SpringBootApp;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqbackend.general.common.base.test.ApplicationComponentTest;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.to.QueueDetailEto;

/**
 * @author azhussai
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class QueueDetailTest extends ApplicationComponentTest {

  @Test
  public void testReturnVisitorCount() {

    EventEto eventEto = new EventEto();
    eventEto.setVisitorCount(4);
    int expectedCount = eventEto.getVisitorCount();
    eventEto = returnVisitorCount();
    int actualCount = eventEto.getVisitorCount();
    // System.out.println(expectedCount + " " + actualCount);

    assertThat(actualCount).isEqualTo(expectedCount);
  }

  @Test
  public void testSaveQueueDetail() {

    QueueDetailEto queueDetailEto = new QueueDetailEto();
    queueDetailEto.setQueueNumber("Q001");

    QueueDetailEto expectedQueueDetail = returnSavedDetail();

    assertThat(queueDetailEto.getQueueNumber()).isEqualTo(expectedQueueDetail.getQueueNumber());
  }

  @Test
  public void testVisitorInSaveQueueDetail() {

    QueueDetailEto queueDetailEto = new QueueDetailEto();
    queueDetailEto.setVisitorId((long) 1);

    QueueDetailEto expectedQueueDetail = returnSavedDetail();

    assertThat(queueDetailEto.getVisitorId()).isEqualTo(expectedQueueDetail.getVisitorId());

  }

  @Test
  public void testEventInSaveQueueDetail() {

    QueueDetailEto queueDetailEto = new QueueDetailEto();
    queueDetailEto.setEventId((long) 4);

    QueueDetailEto expectedQueueDetail = returnSavedDetail();

    assertThat(queueDetailEto.getEventId()).isEqualTo(expectedQueueDetail.getEventId());

  }

  private QueueDetailEto returnSavedDetail() {

    QueueDetailEto queueDetail = new QueueDetailEto();
    queueDetail.setEventId((long) 4);
    queueDetail.setQueueNumber("Q001");
    queueDetail.setVisitorId((long) 1);
    return queueDetail;
  }

  private EventEto returnVisitorCount() {

    EventEto eventEto = new EventEto();
    eventEto.setVisitorCount(4);
    return eventEto;
  }

  public void testDeleteQueueDetail() {

  }

}