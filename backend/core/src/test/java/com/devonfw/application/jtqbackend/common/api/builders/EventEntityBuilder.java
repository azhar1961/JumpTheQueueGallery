package com.devonfw.application.jtqbackend.common.api.builders;

import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;
import java.util.function.Consumer;

import javax.persistence.EntityManager;

import com.devonfw.application.jtqbackend.eventmanagement.dataaccess.api.EventEntity;

/**
 * Test data builder for EventEntity generated with cobigen.
 */
public class EventEntityBuilder {

  private List<Consumer<EventEntity>> parameterToBeApplied;

  /**
   * The constructor.
   */
  public EventEntityBuilder() {

    this.parameterToBeApplied = new LinkedList<>();
    fillMandatoryFields();
    fillMandatoryFields_custom();
  }

  /**
   * @param eventName the eventName to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder eventName(final String eventName) {

    this.parameterToBeApplied.add(target -> target.setEventName(eventName));

    return this;
  }

  /**
   * @param startDate the startDate to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder startDate(final Timestamp startDate) {

    this.parameterToBeApplied.add(target -> target.setStartDate(startDate));

    return this;
  }

  /**
   * @param endDate the endDate to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder endDate(final Timestamp endDate) {

    this.parameterToBeApplied.add(target -> target.setEndDate(endDate));

    return this;
  }

  /**
   * @param location the location to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder location(final String location) {

    this.parameterToBeApplied.add(target -> target.setLocation(location));

    return this;
  }

  /**
   * @param description the description to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder description(final String description) {

    this.parameterToBeApplied.add(target -> target.setDescription(description));

    return this;
  }

  /**
   * @param logo the logo to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder logo(final String logo) {

    this.parameterToBeApplied.add(target -> target.setLogo(logo));

    return this;
  }

  /**
   * @param attentionTime the attentionTime to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder attentionTime(final String attentionTime) {

    this.parameterToBeApplied.add(target -> target.setAttentionTime(attentionTime));

    return this;
  }

  /**
   * @param visitorCount the visitorCount to add.
   * @return the builder for fluent population of fields.
   */
  public EventEntityBuilder visitorCount(final int visitorCount) {

    this.parameterToBeApplied.add(target -> target.setVisitorCount(visitorCount));

    return this;
  }

  /**
   * @return the populated EventEntity.
   */
  public EventEntity createNew() {

    EventEntity evententity = new EventEntity();
    for (Consumer<EventEntity> parameter : this.parameterToBeApplied) {
      parameter.accept(evententity);
    }
    return evententity;
  }

  /**
   * Might be enriched to users needs (will not be overwritten)
   */
  private void fillMandatoryFields_custom() {

  }

  /**
   * Fills all mandatory fields by default. (will be overwritten on re-generation)
   */
  private void fillMandatoryFields() {

  }

  /**
   * @param em the {@link EntityManager}
   * @return the EventEntity
   */
  public EventEntity persist(EntityManager em) {

    EventEntity evententity = createNew();
    em.persist(evententity);
    return evententity;
  }

  /**
   * @param em the {@link EntityManager}
   * @param quantity the quantity
   * @return a list of EventEntity
   */
  public List<EventEntity> persistAndDuplicate(EntityManager em, int quantity) {

    List<EventEntity> evententityList = new LinkedList<>();
    for (int i = 0; i < quantity; i++) {
      EventEntity evententity = createNew();
      // TODO alter at least values with unique key constraints to prevent from exceptions while persisting
      em.persist(evententity);
      evententityList.add(evententity);
    }

    return evententityList;
  }

}
