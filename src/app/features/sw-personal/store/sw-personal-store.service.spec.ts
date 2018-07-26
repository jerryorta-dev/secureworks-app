import { TestBed, inject } from '@angular/core/testing';

import { SwPersonalStoreService } from './sw-personal-store.service';

describe('SwPersonalStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwPersonalStoreService]
    });
  });

  it('should be created', inject([SwPersonalStoreService], (service: SwPersonalStoreService) => {
    expect(service).toBeTruthy();
  }));
});
