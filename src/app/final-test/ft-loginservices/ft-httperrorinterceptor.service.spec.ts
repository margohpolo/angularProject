import { TestBed } from '@angular/core/testing';

import { FTHttpErrorInterceptor } from './ft-httperrorinterceptor.service';

describe('FTHttpErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FTHttpErrorInterceptor = TestBed.get(FTHttpErrorInterceptor);
    expect(service).toBeTruthy();
  });
});
