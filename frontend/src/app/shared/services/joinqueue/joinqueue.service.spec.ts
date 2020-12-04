import { TestBed } from '@angular/core/testing';

import { JoinqueueService } from './joinqueue.service';

describe('JoinqueueService', () => {
  let service: JoinqueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinqueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
