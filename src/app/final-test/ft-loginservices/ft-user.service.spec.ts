import { TestBed } from '@angular/core/testing';

import { FTUserService } from './ft-user.service';

describe('FTUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FTUserService = TestBed.get(FTUserService);
    expect(service).toBeTruthy();
  });
});
