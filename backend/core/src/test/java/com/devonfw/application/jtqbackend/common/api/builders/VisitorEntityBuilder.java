package com.devonfw.application.jtqbackend.common.api.builders;

import java.util.LinkedList;
import java.util.List;
import java.util.function.Consumer;

import javax.persistence.EntityManager;

import com.devonfw.application.jtqbackend.visitormanagement.dataaccess.api.VisitorEntity;

/**
 * Test data builder for VisitorEntity generated with cobigen.
 */
public class VisitorEntityBuilder {

  private List<Consumer<VisitorEntity>> parameterToBeApplied;

  /**
   * The constructor.
   */
  public VisitorEntityBuilder() {

    this.parameterToBeApplied = new LinkedList<>();
    fillMandatoryFields();
    fillMandatoryFields_custom();
  }

  /**
   * @param username the username to add.
   * @return the builder for fluent population of fields.
   */
  public VisitorEntityBuilder username(final String username) {

    this.parameterToBeApplied.add(target -> target.setUsername(username));

    return this;
  }

  /**
   * @param name the name to add.
   * @return the builder for fluent population of fields.
   */
  public VisitorEntityBuilder name(final String name) {

    this.parameterToBeApplied.add(target -> target.setName(name));

    return this;
  }

  /**
   * @param phoneNumber the phoneNumber to add.
   * @return the builder for fluent population of fields.
   */
  public VisitorEntityBuilder phoneNumber(final String phoneNumber) {

    this.parameterToBeApplied.add(target -> target.setPhoneNumber(phoneNumber));

    return this;
  }

  /**
   * @param password the password to add.
   * @return the builder for fluent population of fields.
   */
  public VisitorEntityBuilder password(final String password) {

    this.parameterToBeApplied.add(target -> target.setPassword(password));

    return this;
  }

  /**
   * @param acceptedCommercial the acceptedCommercial to add.
   * @return the builder for fluent population of fields.
   */
  public VisitorEntityBuilder acceptedCommercial(final Boolean acceptedCommercial) {

    this.parameterToBeApplied.add(target -> target.setAcceptedCommercial(acceptedCommercial));

    return this;
  }

  /**
   * @param acceptedTerms the acceptedTerms to add.
   * @return the builder for fluent population of fields.
   */
  public VisitorEntityBuilder acceptedTerms(final Boolean acceptedTerms) {

    this.parameterToBeApplied.add(target -> target.setAcceptedTerms(acceptedTerms));

    return this;
  }

  /**
   * @param userType the userType to add.
   * @return the builder for fluent population of fields.
   */
  public VisitorEntityBuilder userType(final Boolean userType) {

    this.parameterToBeApplied.add(target -> target.setUserType(userType));

    return this;
  }

  /**
   * @return the populated VisitorEntity.
   */
  public VisitorEntity createNew() {

    VisitorEntity visitorentity = new VisitorEntity();
    for (Consumer<VisitorEntity> parameter : this.parameterToBeApplied) {
      parameter.accept(visitorentity);
    }
    return visitorentity;
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
   * @return the VisitorEntity
   */
  public VisitorEntity persist(EntityManager em) {

    VisitorEntity visitorentity = createNew();
    em.persist(visitorentity);
    return visitorentity;
  }

  /**
   * @param em the {@link EntityManager}
   * @param quantity the quantity
   * @return a list of VisitorEntity
   */
  public List<VisitorEntity> persistAndDuplicate(EntityManager em, int quantity) {

    List<VisitorEntity> visitorentityList = new LinkedList<>();
    for (int i = 0; i < quantity; i++) {
      VisitorEntity visitorentity = createNew();
      // TODO alter at least values with unique key constraints to prevent from exceptions while persisting
      em.persist(visitorentity);
      visitorentityList.add(visitorentity);
    }

    return visitorentityList;
  }

}
