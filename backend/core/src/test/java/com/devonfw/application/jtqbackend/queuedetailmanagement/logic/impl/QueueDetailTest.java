package com.devonfw.application.jtqbackend.queuedetailmanagement.logic.impl;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.devonfw.application.jtqbackend.SpringBootApp;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.module.test.common.base.ComponentTest;

/**
 * @author azhussai
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class QueueDetailTest extends ComponentTest {

  @Inject
  private Queuedetailmanagement queuedetailmanagement;

  @Test
  public void saveQueueDetailTest() {

    QueueDetailEto queueDetailEto = new QueueDetailEto();

    queueDetailEto.setCreationTime(null);
    queueDetailEto.setEndTime(null);
    queueDetailEto.setEventId(2l);
    queueDetailEto.setVisitorId(2l);

    QueueDetailEto queueDetailEtoResult = this.queuedetailmanagement.saveQueueDetail(queueDetailEto);
    assertThat(queueDetailEtoResult.getId()).isNotNull();
    assertThat(queueDetailEtoResult.getQueueNumber()).isEqualTo("Q001");
    assertThat(queueDetailEtoResult.getMinEstimatedTime()).isEqualTo("0 minutes");

  }

  @Test
  public void deleteQueueDetailTest() {

    QueueDetailEto queueDetailEto = new QueueDetailEto();

    queueDetailEto.setCreationTime(null);
    queueDetailEto.setEndTime(null);
    queueDetailEto.setEventId(2l);
    queueDetailEto.setVisitorId(2l);

    QueueDetailEto queueDetailEtoResult = this.queuedetailmanagement.saveQueueDetail(queueDetailEto);

    this.queuedetailmanagement.deleteQueueDetail(queueDetailEtoResult.getId());

  }
}
