package com.devonfw.application.jtqbackend.queuedetailmanagement.logic.impl.usecase;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqbackend.eventmanagement.dataaccess.api.EventEntity;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqbackend.queuedetailmanagement.dataaccess.api.QueueDetailEntity;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.usecase.UcManageQueueDetail;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.base.usecase.AbstractQueueDetailUc;

/**
 * Use case implementation for modifying and deleting QueueDetails
 */
@Named
@Validated
@Transactional
public class UcManageQueueDetailImpl extends AbstractQueueDetailUc implements UcManageQueueDetail {

  @Autowired
  private Eventmanagement eventmanagement;

  @Autowired
  private Queuedetailmanagement queuedetailmanagement;

  /** Logger instance. */
  private static final Logger LOG = LoggerFactory.getLogger(UcManageQueueDetailImpl.class);

  private int visitorCount;

  @Override
  public void deleteQueueDetail(long queueDetailId) {

    QueueDetailEntity queueDetail = getQueueDetailRepository().find(queueDetailId);
    getQueueDetailRepository().delete(queueDetail);
    this.eventmanagement.decreaseEventVisitorCount(queueDetail.getEventId());
  }

  /**
   * Saves the Queue Detail.
   *
   * @param QueueDetailEto. Return type of function is QueueDetailEto.
   */

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail) {

    QueueDetailEntity queueDetailEntity = getBeanMapper().map(queueDetail, QueueDetailEntity.class);

    List<QueueDetailEto> queuedetailEtosInQueue = getListOfQueueDetailEto(queueDetailEntity);

    if (queuedetailEtosInQueue.isEmpty()) {

      List<QueueDetailEto> eventqueuedetailEtosInQueue = getEventQueueDetailEtoList(queueDetailEntity);

      queueDetailEntity = processQueueDetail(queueDetailEntity, eventqueuedetailEtosInQueue);

      queueDetailEntity = getQueueDetailRepository().save(queueDetailEntity);

      this.eventmanagement.increaseEventVisitorCount(queueDetailEntity.getEventId());

      return getBeanMapper().map(queueDetailEntity, QueueDetailEto.class);

    } else {
      return queuedetailEtosInQueue.get(0);
    }
  }

  private List<QueueDetailEto> getListOfQueueDetailEto(QueueDetailEntity queueDetailEntity) {

    QueueDetailSearchCriteriaTo searchCriteriaForQueueDetail = setSearchCriteria(queueDetailEntity);

    List<QueueDetailEto> queuedetailEtosInQueue = this.queuedetailmanagement
        .findQueueDetails(searchCriteriaForQueueDetail).getContent();
    return queuedetailEtosInQueue;
  }

  private QueueDetailSearchCriteriaTo setSearchCriteria(QueueDetailEntity queueDetailEntity) {

    QueueDetailSearchCriteriaTo queueDetailSearchCriteriaTo = new QueueDetailSearchCriteriaTo();
    queueDetailSearchCriteriaTo.setEventId(queueDetailEntity.getEventId());
    queueDetailSearchCriteriaTo.setVisitorId(queueDetailEntity.getVisitorId());

    return queueDetailSearchCriteriaTo;

  }

  private List<QueueDetailEto> getEventQueueDetailEtoList(QueueDetailEntity queueDetailEntity) {

    QueueDetailSearchCriteriaTo searchCriteriaForEvent = setSearchCriteriaForEvent(queueDetailEntity.getEventId());

    List<QueueDetailEto> eventqueuedetailEtosInQueue = this.queuedetailmanagement
        .findQueueDetails(searchCriteriaForEvent).getContent();
    return eventqueuedetailEtosInQueue;
  }

  private QueueDetailSearchCriteriaTo setSearchCriteriaForEvent(long eventId) {

    QueueDetailSearchCriteriaTo queueDetailSearchCriteriaToForEvent = new QueueDetailSearchCriteriaTo();
    queueDetailSearchCriteriaToForEvent.setEventId(eventId);

    return queueDetailSearchCriteriaToForEvent;
  }

  private QueueDetailEntity processQueueDetail(QueueDetailEntity queueDetailEntity,
      List<QueueDetailEto> eventqueuedetailEtosInQueue) {

    assignQueueNumber(eventqueuedetailEtosInQueue, queueDetailEntity);

    int visitorCount = returnVisitorCount(queueDetailEntity.getEventId());

    queueDetailEntity = setEventTimingInQueue(queueDetailEntity, visitorCount);

    return queueDetailEntity;
  }

  public void assignQueueNumber(List<QueueDetailEto> eventqueuedetailEtosInQueue, QueueDetailEntity queueDetailEntity) {

    if (eventqueuedetailEtosInQueue.isEmpty()) {

      queueDetailEntity.setQueueNumber("Q001");

    } else {

      queueDetailEntity.setQueueNumber(generateQueueNumber(eventqueuedetailEtosInQueue));

    }
  }

  private int returnVisitorCount(long eventId) {

    EventEto eventEto = this.eventmanagement.findEvent(eventId);
    EventEntity eventEntity = getBeanMapper().map(eventEto, EventEntity.class);
    int visitorCount = eventEntity.getVisitorCount();
    return visitorCount;
  }

  private QueueDetailEntity setEventTimingInQueue(QueueDetailEntity queueDetailEntity, int visitor_Count) {

    queueDetailEntity.setCreationTime(Timestamp.from(Instant.now()));
    queueDetailEntity.setStartTime(Timestamp.from(Instant.now()));
    queueDetailEntity.setEndTime(null);
    queueDetailEntity.setMinEstimatedTime(getEstimatedTimeForVisitor(visitor_Count));

    return queueDetailEntity;
  }

  public String generateQueueNumber(List<QueueDetailEto> eventqueuedetailEtosInQueue) {

    QueueDetailEto lastQueueDetail = eventqueuedetailEtosInQueue.get(eventqueuedetailEtosInQueue.size() - 1);
    int lastQueueNumber = Integer.parseInt(lastQueueDetail.getQueueNumber().substring(1));

    int updatedQueueNumber = lastQueueNumber + 1;

    String integerPart = String.valueOf(updatedQueueNumber);
    String newQueueNumber = "Q00" + integerPart;
    return newQueueNumber;
  }

  @Override
  public String getEstimatedTimeForVisitor(int visitorCount) {

    String minAttentionTime = "5 minutes";
    String calculatedOutput = "";
    int minTimePerQueue = Integer.parseInt(minAttentionTime.substring(0, 1));
    int calculateEstimatedTime = minTimePerQueue * visitorCount;
    return calculatedOutput = String.valueOf(calculateEstimatedTime) + " minutes";

  }
}