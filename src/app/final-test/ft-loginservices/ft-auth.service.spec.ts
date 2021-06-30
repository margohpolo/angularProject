import { TestBed } from '@angular/core/testing';

import { FTAuthService } from './ft-auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FTAuthService = TestBed.get(FTAuthService);
    expect(service).toBeTruthy();
  });
});
