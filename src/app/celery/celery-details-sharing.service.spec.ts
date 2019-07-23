import { TestBed } from '@angular/core/testing';

import { CeleryDetailsSharingService } from './celery-details-sharing.service';

describe('CeleryDetailsSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CeleryDetailsSharingService = TestBed.get(CeleryDetailsSharingService);
    expect(service).toBeTruthy();
  });
});
