import { TestBed } from '@angular/core/testing';

import { TomatoDetailsSharingService } from './tomato-details-sharing.service';

describe('TomatoDetailsSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TomatoDetailsSharingService = TestBed.get(TomatoDetailsSharingService);
    expect(service).toBeTruthy();
  });
});
