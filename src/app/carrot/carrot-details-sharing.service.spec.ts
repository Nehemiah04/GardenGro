import { TestBed } from '@angular/core/testing';

import { CarrotDetailsSharingService } from './carrot-details-sharing.service';

describe('CarrotDetailsSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrotDetailsSharingService = TestBed.get(CarrotDetailsSharingService);
    expect(service).toBeTruthy();
  });
});
