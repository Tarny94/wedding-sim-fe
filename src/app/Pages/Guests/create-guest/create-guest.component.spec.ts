import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuestComponent } from './create-guest.component';

describe('CreateGuestComponent', () => {
  let component: CreateGuestComponent;
  let fixture: ComponentFixture<CreateGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGuestComponent]
    });
    fixture = TestBed.createComponent(CreateGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
