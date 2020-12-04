package com.devonfw.application.jtqbackend.common.api.builders;

import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;
import java.util.function.Consumer;

import javax.persistence.EntityManager;

import com.devonfw.application.jtqbackend.eventmanagement.dataaccess.api.EventEntity;
import com.devonfw.application.jtqbackend.queuedetailmanagement.dataaccess.api.QueueDetailEntity;
import com.devonfw.application.jtqbackend.visitormanagement.dataaccess.api.VisitorEntity;

/**
 * Test data builder for QueueDetailEntity generated with cobigen.
 */
public class QueueDetailEntityBuilder {

  private List<Consumer<QueueDetailEntity>> parameterToBeApplied;

  /**
   * The constructor.
   */
  public QueueDetailEntityBuilder() {

    this.parameterToBeApplied = new LinkedList<>();
    fillMandatoryFields();
    fillMandatoryFields_custom();
  }

  /**
   * @param queueNumber the queueNumber to add.
   * @return the builder for fluent population of fields.
   */
  public QueueDetailEntityBuilder queueNumber(final String queueNumber) {

    this.parameterToBeApplied.add(target -> target.setQueueNumber(queueNumber));

    return this;
  }

  /**
   * @param creationTime the creationTime to add.
   * @return the builder for fluent population of fields.
   */
  public QueueDetailEntityBuilder creationTime(final Timestamp creationTime) {

    this.parameterToBeApplied.add(target -> target.setCreationTime(creationTime));

    return this;
  }

  /**
   * @param startTime the startTime to add.
   * @return the builder for fluent population of fields.
   */
  public QueueDetailEntityBuilder startTime(final Timestamp startTime) {

    this.parameterToBeApplied.add(target -> target.setStartTime(startTime));

    return this;
  }

  /**
   * @param endTime the endTime to add.
   * @return the builder for fluent population of fields.
   */
  public QueueDetailEntityBuilder endTime(final Timestamp endTime) {

    this.parameterToBeApplied.add(target -> target.setEndTime(endTime));

    return this;
  }

  /**
   * @param minEstimatedTime the minEstimatedTime to add.
   * @return the builder for fluent population of fields.
   */
  public QueueDetailEntityBuilder minEstimatedTime(final String minEstimatedTime) {

    this.parameterToBeApplied.add(target -> target.setMinEstimatedTime(minEstimatedTime));

    return this;
  }

  /**
   * @param visitor the visitor to add.
   * @return the builder for fluent population of fields.
   */
  public QueueDetailEntityBuilder visitor(final VisitorEntity visitor) {

    this.parameterToBeApplied.add(target -> target.setVisitor(visitor));

    return this;
  }

  /**
   * @param event the event to add.
   * @return the builder for fluent population of fields.
   */
  public QueueDetailEntityBuilder event(final EventEntity event) {

    this.parameterToBeApplied.add(target -> target.setEvent(event));

    return this;
  }

  /**
   * @return the populated QueueDetailEntity.
   */
  public QueueDetailEntity createNew() {

    QueueDetailEntity queuedetailentity = new QueueDetailEntity();
    for (Consumer<QueueDetailEntity> parameter : this.parameterToBeApplied) {
      parameter.accept(queuedetailentity);
    }
    return queuedetailentity;
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
   * @return the QueueDetailEntity
   */
  public QueueDetailEntity persist(EntityManager em) {

    QueueDetailEntity queuedetailentity = createNew();
    em.persist(queuedetailentity);
    return queuedetailentity;
  }

  /**
   * @param em the {@link EntityManager}
   * @param quantity the quantity
   * @return a list of QueueDetailEntity
   */
  public List<QueueDetailEntity> persistAndDuplicate(EntityManager em, int quantity) {

    List<QueueDetailEntity> queuedetailentityList = new LinkedList<>();
    for (int i = 0; i < quantity; i++) {
      QueueDetailEntity queuedetailentity = createNew();
      // TODO alter at least values with unique key constraints to prevent from exceptions while persisting
      em.persist(queuedetailentity);
      queuedetailentityList.add(queuedetailentity);
    }

    return queuedetailentityList;
  }

}
