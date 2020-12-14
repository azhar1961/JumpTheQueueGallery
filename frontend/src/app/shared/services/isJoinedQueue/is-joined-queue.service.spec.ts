import { TestBed } from '@angular/core/testing';

import { IsJoinedQueueService } from './is-joined-queue.service';

describe('IsJoinedQueueService', () => {
  let service: IsJoinedQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsJoinedQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
