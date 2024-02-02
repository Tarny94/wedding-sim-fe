import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationFilteringSortingComponent } from './table-pagination-filtering-sorting.component';

describe('TablePaginationFilteringSortingComponent', () => {
  let component: TablePaginationFilteringSortingComponent;
  let fixture: ComponentFixture<TablePaginationFilteringSortingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePaginationFilteringSortingComponent]
    });
    fixture = TestBed.createComponent(TablePaginationFilteringSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
