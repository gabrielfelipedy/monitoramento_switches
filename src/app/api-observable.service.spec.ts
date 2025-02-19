import { TestBed } from '@angular/core/testing';

import { ApiObservableService } from './api-observable.service';

describe('ApiObservableService', () => {
  let service: ApiObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
