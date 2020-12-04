package com.devonfw.application.jtqbackend.visitormanagement.logic.impl.usecase;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqbackend.visitormanagement.dataaccess.api.VisitorEntity;
import com.devonfw.application.jtqbackend.visitormanagement.logic.api.to.VisitorCto;
import com.devonfw.application.jtqbackend.visitormanagement.logic.api.to.VisitorEto;
import com.devonfw.application.jtqbackend.visitormanagement.logic.api.to.VisitorSearchCriteriaTo;
import com.devonfw.application.jtqbackend.visitormanagement.logic.api.usecase.UcFindVisitor;
import com.devonfw.application.jtqbackend.visitormanagement.logic.base.usecase.AbstractVisitorUc;

/**
 * Use case implementation for searching, filtering and getting Visitors
 */
@Named
@Validated
@Transactional
public class UcFindVisitorImpl extends AbstractVisitorUc implements UcFindVisitor {

  /**
   * Logger instance.
   */
  private static final Logger LOG = LoggerFactory.getLogger(UcFindVisitorImpl.class);

  @Override
  public VisitorEto findVisitor(long id) {

    LOG.debug("Get Visitor with id {} from database.", id);
    Optional<VisitorEntity> foundEntity = getVisitorRepository().findById(id);
    if (foundEntity.isPresent())
      return getBeanMapper().map(foundEntity.get(), VisitorEto.class);
    else
      return null;
  }

  @Override
  public Page<VisitorEto> findVisitors(VisitorSearchCriteriaTo criteria) {

    Page<VisitorEntity> visitors = getVisitorRepository().findByCriteria(criteria);
    return mapPaginatedEntityList(visitors, VisitorEto.class);
  }

  @Override
  public VisitorCto findVisitorCto(long id) {

    LOG.debug("Get VisitorCto with id {} from database.", id);
    VisitorEntity entity = getVisitorRepository().find(id);
    VisitorCto cto = new VisitorCto();
    cto.setVisitor(getBeanMapper().map(entity, VisitorEto.class));

    return cto;
  }

  @Override
  public Page<VisitorCto> findVisitorCtos(VisitorSearchCriteriaTo criteria) {

    Page<VisitorEntity> visitors = getVisitorRepository().findByCriteria(criteria);
    List<VisitorCto> ctos = new ArrayList<>();
    for (VisitorEntity entity : visitors.getContent()) {
      VisitorCto cto = new VisitorCto();
      cto.setVisitor(getBeanMapper().map(entity, VisitorEto.class));
      ctos.add(cto);
    }
    Pageable pagResultTo = PageRequest.of(criteria.getPageable().getPageNumber(), criteria.getPageable().getPageSize());

    return new PageImpl<>(ctos, pagResultTo, visitors.getTotalElements());
  }

}
