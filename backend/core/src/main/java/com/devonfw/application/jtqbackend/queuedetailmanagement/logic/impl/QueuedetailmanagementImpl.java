package com.devonfw.application.jtqbackend.queuedetailmanagement.logic.impl;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqbackend.general.logic.base.AbstractComponentFacade;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.to.QueueDetailCto;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.usecase.UcFindQueueDetail;
import com.devonfw.application.jtqbackend.queuedetailmanagement.logic.api.usecase.UcManageQueueDetail;

/**
 * Implementation of component interface of queuedetailmanagement
 */
@Named
public class QueuedetailmanagementImpl extends AbstractComponentFacade implements Queuedetailmanagement {

  @Inject
  private UcFindQueueDetail ucFindQueueDetail;

  @Inject
  private UcManageQueueDetail ucManageQueueDetail;

  @Override
  public QueueDetailEto findQueueDetail(long id) {

    return this.ucFindQueueDetail.findQueueDetail(id);
  }

  @Override
  public Page<QueueDetailEto> findQueueDetails(QueueDetailSearchCriteriaTo criteria) {

    return this.ucFindQueueDetail.findQueueDetails(criteria);
  }

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queuedetail) {

    return this.ucManageQueueDetail.saveQueueDetail(queuedetail);
  }

  @Override
  public boolean deleteQueueDetail(long id) {

    return this.ucManageQueueDetail.deleteQueueDetail(id);
  }

  @Override
  public QueueDetailCto findQueueDetailCto(long id) {

    return this.ucFindQueueDetail.findQueueDetailCto(id);
  }

  @Override
  public Page<QueueDetailCto> findQueueDetailCtos(QueueDetailSearchCriteriaTo criteria) {

    return this.ucFindQueueDetail.findQueueDetailCtos(criteria);
  }

  @Override
  public String getEstimatedTimeForVisitor(int visitorCount) {

    return this.ucManageQueueDetail.getEstimatedTimeForVisitor(visitorCount);
  }

}
