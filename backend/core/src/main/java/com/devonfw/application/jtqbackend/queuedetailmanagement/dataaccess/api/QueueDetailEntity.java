package com.devonfw.application.jtqbackend.queuedetailmanagement.dataaccess.api;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.validation.constraints.Size;

import com.devonfw.application.jtqbackend.eventmanagement.dataaccess.api.EventEntity;
import com.devonfw.application.jtqbackend.general.dataaccess.api.ApplicationPersistenceEntity;
import com.devonfw.application.jtqbackend.queuedetailmanagement.common.api.QueueDetail;
import com.devonfw.application.jtqbackend.visitormanagement.dataaccess.api.VisitorEntity;

/**
 * @author azhussai
 */
@Entity
@Table(name = "QueueDetail")
public class QueueDetailEntity extends ApplicationPersistenceEntity implements QueueDetail {

  @Size(min = 2, max = 5)
  private String queueNumber;

  @Temporal(TemporalType.TIMESTAMP)
  private Timestamp creationTime;

  @Temporal(TemporalType.TIMESTAMP)
  private Timestamp startTime;

  @Temporal(TemporalType.TIMESTAMP)
  private Timestamp endTime;

  private String minEstimatedTime;

  private VisitorEntity visitor;

  private EventEntity Event;

  private static final long serialVersionUID = 1L;

  /**
   * @return queueNumber
   */
  public String getQueueNumber() {

    return this.queueNumber;
  }

  /**
   * @param queueNumber new value of {@link #getqueueNumber}.
   */
  public void setQueueNumber(String queueNumber) {

    this.queueNumber = queueNumber;
  }

  /**
   * @return creationTime
   */
  public Timestamp getCreationTime() {

    return this.creationTime;
  }

  /**
   * @param creationTime new value of {@link #getcreationTime}.
   */
  public void setCreationTime(Timestamp creationTime) {

    this.creationTime = creationTime;
  }

  /**
   * @return startTime
   */
  public Timestamp getStartTime() {

    return this.startTime;
  }

  /**
   * @param startTime new value of {@link #getstartTime}.
   */
  public void setStartTime(Timestamp startTime) {

    this.startTime = startTime;
  }

  /**
   * @return endTime
   */
  public Timestamp getEndTime() {

    return this.endTime;
  }

  /**
   * @param endTime new value of {@link #getendTime}.
   */
  public void setEndTime(Timestamp endTime) {

    this.endTime = endTime;
  }

  /**
   * @return minEstimatedTime
   */
  public String getMinEstimatedTime() {

    return this.minEstimatedTime;
  }

  /**
   * @param minEstimatedTime new value of {@link #getminEstimatedTime}.
   */
  public void setMinEstimatedTime(String minEstimatedTime) {

    this.minEstimatedTime = minEstimatedTime;
  }

  /**
   * @return visitor
   */
  @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
  @JoinColumn(name = "idVisitor")
  public VisitorEntity getVisitor() {

    return this.visitor;
  }

  /**
   * @param visitor new value of {@link #getvisitor}.
   */
  public void setVisitor(VisitorEntity visitor) {

    this.visitor = visitor;
  }

  /**
   * @return event
   */
  @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
  @JoinColumn(name = "idEvent")
  public EventEntity getEvent() {

    return this.Event;
  }

  /**
   * @param event new value of {@link #getevent}.
   */
  public void setEvent(EventEntity event) {

    this.Event = event;
  }

  @Override
  @Transient
  public Long getVisitorId() {

    if (this.visitor == null) {
      return null;
    }
    return this.visitor.getId();
  }

  @Override
  public void setVisitorId(Long visitorId) {

    if (visitorId == null) {
      this.visitor = null;
    } else {
      VisitorEntity visitorEntity = new VisitorEntity();
      visitorEntity.setId(visitorId);
      this.visitor = visitorEntity;
    }
  }

  @Override
  @Transient
  public Long getEventId() {

    if (this.Event == null) {
      return null;
    }
    return this.Event.getId();
  }

  @Override
  public void setEventId(Long EventId) {

    if (EventId == null) {
      this.Event = null;
    } else {
      EventEntity eventEntity = new EventEntity();
      eventEntity.setId(EventId);
      this.Event = eventEntity;
    }
  }

}
