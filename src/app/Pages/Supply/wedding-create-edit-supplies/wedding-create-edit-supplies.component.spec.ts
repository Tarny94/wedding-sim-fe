import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { WeddingCreateEditSuppliesComponent } from "./wedding-create-edit-supplies.component";

describe('WeddingCreateEditSuppliesComponent', () => {
  let component: WeddingCreateEditSuppliesComponent;
  let fixture: ComponentFixture<WeddingCreateEditSuppliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingCreateEditSuppliesComponent]
    });
    fixture = TestBed.createComponent(WeddingCreateEditSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
