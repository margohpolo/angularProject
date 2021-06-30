import { TestBed } from '@angular/core/testing';

import { FTTokenStorageService } from './ft-token-service.service';

describe('FTTokenStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FTTokenStorageService = TestBed.get(FTTokenStorageService);
    expect(service).toBeTruthy();
  });
});
