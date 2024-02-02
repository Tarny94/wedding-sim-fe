import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingStatisticsComponent } from './wedding-statistics.component';

describe('WeddingStatisticsComponent', () => {
  let component: WeddingStatisticsComponent;
  let fixture: ComponentFixture<WeddingStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingStatisticsComponent]
    });
    fixture = TestBed.createComponent(WeddingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
