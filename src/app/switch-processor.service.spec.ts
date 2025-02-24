import { TestBed } from '@angular/core/testing';

import { SwitchProcessorService } from './switch-processor.service';

describe('SwitchProcessorService', () => {
  let service: SwitchProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
