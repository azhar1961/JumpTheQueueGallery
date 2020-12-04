package com.devonfw.application.jtqbackend.visitormanagement.logic.api.to;

import com.devonfw.module.basic.common.api.to.AbstractCto;

/**
 * Composite transport object of Visitor
 */
public class VisitorCto extends AbstractCto {

  private static final long serialVersionUID = 1L;

  private VisitorEto visitor;

  public VisitorEto getVisitor() {

    return visitor;
  }

  public void setVisitor(VisitorEto visitor) {

    this.visitor = visitor;
  }

}
