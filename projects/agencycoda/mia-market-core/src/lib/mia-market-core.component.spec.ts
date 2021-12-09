import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaMarketCoreComponent } from './mia-market-core.component';

describe('MiaMarketCoreComponent', () => {
  let component: MiaMarketCoreComponent;
  let fixture: ComponentFixture<MiaMarketCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaMarketCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaMarketCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
