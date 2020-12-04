package com.devonfw.application.jtqbackend.queuedetailmanagement.logic.impl.usecase;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Objects;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
  public boolean deleteQueueDetail(long queueDetailId) {

    QueueDetailEntity queueDetail = getQueueDetailRepository().find(queueDetailId);
    this.eventmanagement.decreaseEventVisitorCount(queueDetail.getEventId());
    getQueueDetailRepository().delete(queueDetail);
    LOG.debug("The queueDetail with id '{}' has been deleted.", queueDetailId);
    return true;
  }

  /**
   * Saves the Queue Detail.
   *
   * @param QueueDetailEto. Return type of function is QueueDetailEto.
   */
  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail) {

    Objects.requireNonNull(queueDetail, "queueDetail should not be null");

    QueueDetailEntity queueDetailEntity = getBeanMapper().map(queueDetail, QueueDetailEntity.class);

    long eventId = queueDetailEntity.getEventId();
    long visitorId = queueDetailEntity.getVisitorId();
    QueueDetailSearchCriteriaTo queueDetailSearchCriteriaTo = setSearchCriteria(eventId, visitorId);

    List<QueueDetailEto> queuedetailEtosInQueue = this.queuedetailmanagement
        .findQueueDetails(queueDetailSearchCriteriaTo).getContent();

    if (queuedetailEtosInQueue.isEmpty()) {
      QueueDetailSearchCriteriaTo queueDetailSearchCriteriaToForEvent = setSearchCriteriaForEvent(eventId);

      List<QueueDetailEto> eventqueuedetailEtosInQueue = this.queuedetailmanagement
          .findQueueDetails(queueDetailSearchCriteriaToForEvent).getContent();

      if (eventqueuedetailEtosInQueue.isEmpty()) {
        queueDetailEntity.setQueueNumber("Q000");
      } else {
        queueDetailEntity = setEventQueueDetails(eventqueuedetailEtosInQueue, queueDetailEntity);
      }

      long eventid = queueDetailEntity.getEventId();

      EventEto eventEto = this.eventmanagement.findEvent(eventid);
      EventEntity eventEntity = getBeanMapper().map(eventEto, EventEntity.class);
      this.visitorCount = eventEntity.getVisitorCount();

      queueDetailEntity = setEventTimingInQueue(queueDetailEntity, this.visitorCount);

      QueueDetailEntity resultEntity = saveNewEventDetails(queueDetailEntity);

      return getBeanMapper().map(resultEntity, QueueDetailEto.class);
    } else {
      return queuedetailEtosInQueue.get(0);
    }
  }

  private QueueDetailSearchCriteriaTo setSearchCriteria(long eventId, long visitorId) {

    QueueDetailSearchCriteriaTo queueDetailSearchCriteriaTo = new QueueDetailSearchCriteriaTo();
    queueDetailSearchCriteriaTo.setEventId(eventId);
    queueDetailSearchCriteriaTo.setVisitorId(visitorId);
    Pageable pageable = PageRequest.of(0, 1000);
    queueDetailSearchCriteriaTo.setPageable(pageable);

    return queueDetailSearchCriteriaTo;

  }

  private QueueDetailSearchCriteriaTo setSearchCriteriaForEvent(long eventId) {

    QueueDetailSearchCriteriaTo queueDetailSearchCriteriaToForEvent = new QueueDetailSearchCriteriaTo();
    queueDetailSearchCriteriaToForEvent.setEventId(eventId);
    Pageable eventPageable = PageRequest.of(0, 1000);
    queueDetailSearchCriteriaToForEvent.setPageable(eventPageable);
    return queueDetailSearchCriteriaToForEvent;
  }

  private QueueDetailEntity setEventQueueDetails(List<QueueDetailEto> eventqueuedetailEtosInQueue,
      QueueDetailEntity queueDetailEntity) {

    QueueDetailEto lastQueueDetail = eventqueuedetailEtosInQueue.get(eventqueuedetailEtosInQueue.size() - 1);
    int lastQueueNumber = Integer.parseInt(lastQueueDetail.getQueueNumber().substring(1));
    queueDetailEntity.setQueueNumber(generateQueueNumber(lastQueueNumber));
    return queueDetailEntity;
  }

  private QueueDetailEntity setEventTimingInQueue(QueueDetailEntity queueDetailEntity, int visitor_Count) {

    queueDetailEntity.setCreationTime(Timestamp.from(Instant.now()));
    queueDetailEntity.setStartTime(Timestamp.from(Instant.now()));
    queueDetailEntity.setEndTime(null);
    queueDetailEntity.setMinEstimatedTime(getEstimatedTimeForVisitor(visitor_Count));

    return queueDetailEntity;
  }

  private QueueDetailEntity saveNewEventDetails(QueueDetailEntity queueDetailEntity) {

    this.eventmanagement.increaseEventVisitorCount(queueDetailEntity.getEventId());
    QueueDetailEntity resultEntity = getQueueDetailRepository().save(queueDetailEntity);
    LOG.debug("QueueDetail with id '{}' has been created.", resultEntity.getId());
    LOG.debug("The visitor count has been increased.");
    return resultEntity;
  }

  /**
   * Generates a new Queue Code using the Queue number of the last codeaccess created.
   *
   * @param lastQueueNumber the int of the last codeaccess created. Return type of function is string that is the new
   *        Queue Number (example: 'Q005').
   */
  public String generateQueueNumber(int lastQueueNumber) {

    int newQueueNumberDigit = lastQueueNumber + 1;
    String newQueueCode = "";
    if (newQueueNumberDigit == 1000) {
      newQueueCode = "Q000";
    } else {
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.append(newQueueNumberDigit);
      while (stringBuilder.length() < 3) {
        stringBuilder.insert(0, "0");
      }
      stringBuilder.insert(0, "Q");
      newQueueCode = stringBuilder.toString();
    }
    return newQueueCode;
  }

  @Override
  public String getEstimatedTimeForVisitor(int visitorCount) {

    String minEstimatedTime = "5 minutes";
    int minTimePerQueue = Integer.parseInt(minEstimatedTime.substring(0, 1));
    int lastVisitorIndex = visitorCount - 1;
    int calculateEstimatedTime = minTimePerQueue * lastVisitorIndex;
    String calculatedOutput = String.valueOf(calculateEstimatedTime) + "minutes";

    return calculatedOutput;
  }
}
