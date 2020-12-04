import { TestBed } from '@angular/core/testing';

import { ShowqueueService } from './showqueue.service';

describe('ShowqueueService', () => {
  let service: ShowqueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowqueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
