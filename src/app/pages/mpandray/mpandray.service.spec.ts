import { TestBed } from '@angular/core/testing';

import { MpandrayService } from './mpandray.service';

describe('MpandrayService', () => {
  let service: MpandrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpandrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
