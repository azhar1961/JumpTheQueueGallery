package com.devonfw.application.jtqbackend.eventmanagement.logic.impl;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqbackend.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.to.EventCto;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.to.EventSearchCriteriaTo;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.usecase.UcFindEvent;
import com.devonfw.application.jtqbackend.eventmanagement.logic.api.usecase.UcManageEvent;
import com.devonfw.application.jtqbackend.general.logic.base.AbstractComponentFacade;

/**
 * Implementation of component interface of eventmanagement
 */
@Named
public class EventmanagementImpl extends AbstractComponentFacade implements Eventmanagement {

  @Inject
  private UcFindEvent ucFindEvent;

  @Inject
  private UcManageEvent ucManageEvent;

  @Override
  public EventEto findEvent(long id) {

    return this.ucFindEvent.findEvent(id);
  }

  @Override
  public Page<EventEto> findEvents(EventSearchCriteriaTo criteria) {

    return this.ucFindEvent.findEvents(criteria);
  }

  @Override
  public EventEto saveEvent(EventEto event) {

    return this.ucManageEvent.saveEvent(event);
  }

  @Override
  public boolean deleteEvent(long id) {

    return this.ucManageEvent.deleteEvent(id);
  }

  @Override
  public EventCto findEventCto(long id) {

    return this.ucFindEvent.findEventCto(id);
  }

  @Override
  public Page<EventCto> findEventCtos(EventSearchCriteriaTo criteria) {

    return this.ucFindEvent.findEventCtos(criteria);
  }

  @Override
  public void decreaseEventVisitorCount(long eventId) {

    this.ucManageEvent.decreaseEventVisitorCount(eventId);

  }

  @Override
  public void increaseEventVisitorCount(long eventId) {

    this.ucManageEvent.increaseEventVisitorCount(eventId);

  }

}
