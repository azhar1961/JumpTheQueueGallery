package com.devonfw.application.jtqbackend.eventmanagement.logic.base.usecase;

import javax.inject.Inject;

import com.devonfw.application.jtqbackend.eventmanagement.dataaccess.api.repo.EventRepository;
import com.devonfw.application.jtqbackend.general.logic.base.AbstractUc;

/**
 * Abstract use case for Events, which provides access to the commonly necessary data access objects.
 */
public class AbstractEventUc extends AbstractUc {

  /** @see #getEventRepository() */
  @Inject
  private EventRepository eventRepository;

  /**
   * Returns the field 'eventRepository'.
   * 
   * @return the {@link EventRepository} instance.
   */
  public EventRepository getEventRepository() {

    return this.eventRepository;
  }

}
