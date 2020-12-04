package com.devonfw.application.jtqbackend.eventmanagement.logic.api.to;

import com.devonfw.module.basic.common.api.to.AbstractCto;

/**
 * Composite transport object of Event
 */
public class EventCto extends AbstractCto {

  private static final long serialVersionUID = 1L;

  private EventEto event;

  public EventEto getEvent() {

    return event;
  }

  public void setEvent(EventEto event) {

    this.event = event;
  }

}
