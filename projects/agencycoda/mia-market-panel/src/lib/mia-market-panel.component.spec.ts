import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaMarketPanelComponent } from './mia-market-panel.component';

describe('MiaMarketPanelComponent', () => {
  let component: MiaMarketPanelComponent;
  let fixture: ComponentFixture<MiaMarketPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaMarketPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaMarketPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
