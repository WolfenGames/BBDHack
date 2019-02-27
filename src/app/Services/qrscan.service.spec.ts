import { TestBed } from '@angular/core/testing';

import { QrscanService } from './qrscan.service';

describe('QrscanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrscanService = TestBed.get(QrscanService);
    expect(service).toBeTruthy();
  });
});
