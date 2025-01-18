import { TestBed } from '@angular/core/testing';

import { AdidyService } from './adidy.service';

describe('AdidyService', () => {
  let service: AdidyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdidyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
