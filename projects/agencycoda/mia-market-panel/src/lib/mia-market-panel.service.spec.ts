import { TestBed } from '@angular/core/testing';

import { MiaMarketPanelService } from './mia-market-panel.service';

describe('MiaMarketPanelService', () => {
  let service: MiaMarketPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaMarketPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
