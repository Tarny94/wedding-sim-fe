import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWeddingComponent } from './header-wedding.component';

describe('HeaderWeddingComponent', () => {
  let component: HeaderWeddingComponent;
  let fixture: ComponentFixture<HeaderWeddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderWeddingComponent]
    });
    fixture = TestBed.createComponent(HeaderWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
