package com.devonfw.application.jtqbackend.eventmanagement.dataaccess.api;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.devonfw.application.jtqbackend.eventmanagement.common.api.Event;
import com.devonfw.application.jtqbackend.general.dataaccess.api.ApplicationPersistenceEntity;

/**
 * @author azhussai
 */
@Entity
@Table(name = "Event")
public class EventEntity extends ApplicationPersistenceEntity implements Event {

  private String eventName;

  @Temporal(TemporalType.TIMESTAMP)
  private Timestamp startDate;

  @Temporal(TemporalType.TIMESTAMP)
  private Timestamp endDate;

  private String location;

  private String description;

  private String logo;

  private String attentionTime;

  private int visitorCount;

  private static final long serialVersionUID = 1L;

  /**
   * @return eventName
   */
  public String getEventName() {

    return this.eventName;
  }

  /**
   * @param eventName new value of {@link #geteventName}.
   */
  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  /**
   * @return startDate
   */
  public Timestamp getStartDate() {

    return this.startDate;
  }

  /**
   * @param startDate new value of {@link #getstartDate}.
   */
  public void setStartDate(Timestamp startDate) {

    this.startDate = startDate;
  }

  /**
   * @return endDate
   */
  public Timestamp getEndDate() {

    return this.endDate;
  }

  /**
   * @param endDate new value of {@link #getendDate}.
   */
  public void setEndDate(Timestamp endDate) {

    this.endDate = endDate;
  }

  /**
   * @return location
   */
  public String getLocation() {

    return this.location;
  }

  /**
   * @param location new value of {@link #getlocation}.
   */
  public void setLocation(String location) {

    this.location = location;
  }

  /**
   * @return description
   */
  public String getDescription() {

    return this.description;
  }

  /**
   * @param description new value of {@link #getdescription}.
   */
  public void setDescription(String description) {

    this.description = description;
  }

  /**
   * @return logo
   */
  public String getLogo() {

    return this.logo;
  }

  /**
   * @param logo new value of {@link #getlogo}.
   */
  public void setLogo(String logo) {

    this.logo = logo;
  }

  /**
   * @return attentionTime
   */
  public String getAttentionTime() {

    return this.attentionTime;
  }

  /**
   * @param attentionTime new value of {@link #getattentionTime}.
   */
  public void setAttentionTime(String attentionTime) {

    this.attentionTime = attentionTime;
  }

  /**
   * @return visitorCount
   */
  public int getVisitorCount() {

    return this.visitorCount;
  }

  /**
   * @param visitorCount new value of {@link #getvisitorCount}.
   */
  public void setVisitorCount(int visitorCount) {

    this.visitorCount = visitorCount;
  }

}
