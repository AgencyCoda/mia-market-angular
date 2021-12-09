import { TestBed } from '@angular/core/testing';

import { MiaMarketCoreService } from './mia-market-core.service';

describe('MiaMarketCoreService', () => {
  let service: MiaMarketCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaMarketCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
