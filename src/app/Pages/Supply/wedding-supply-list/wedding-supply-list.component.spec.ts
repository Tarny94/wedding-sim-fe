import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { WeddingSupplyListComponent } from "./wedding-supply-list.component";

describe('WeddingSupplyListComponent', () => {
  let component: WeddingSupplyListComponent;
  let fixture: ComponentFixture<WeddingSupplyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingSupplyListComponent]
    });
    fixture = TestBed.createComponent(WeddingSupplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
