import { TestBed } from '@angular/core/testing';

import { PotatoDetailsSharingService } from './potato-details-sharing.service';

describe('PotatoDetailsSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotatoDetailsSharingService = TestBed.get(PotatoDetailsSharingService);
    expect(service).toBeTruthy();
  });
});
