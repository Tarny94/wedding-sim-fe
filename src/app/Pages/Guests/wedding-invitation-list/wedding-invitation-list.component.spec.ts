import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingInvitationListComponent } from './wedding-invitation-list.component';

describe('WeddingInvitationListComponent', () => {
  let component: WeddingInvitationListComponent;
  let fixture: ComponentFixture<WeddingInvitationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingInvitationListComponent]
    });
    fixture = TestBed.createComponent(WeddingInvitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
