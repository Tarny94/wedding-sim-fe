import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgIf, TitleCasePipe} from "@angular/common";
import {displayedColumnsArray, displayedColumnsNameGuestsList} from "../../../constants/const";
import {MatIconModule} from "@angular/material/icon";
import {GuestService} from "../guest-service/guest.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateGuestComponent} from "../create-guest/create-guest.component";
import {ConfirmationDialogComponent} from "../../utils/confirmation-dialog/confirmation-dialog.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-table-with-pagination-filtering-sorting',
  templateUrl: './table-pagination-filtering-sorting.component.html',
  styleUrls: ['./table-pagination-filtering-sorting.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, TitleCasePipe, MatIconModule, MatCheckboxModule, NgIf, FormsModule],
})

export class TablePaginationFilteringSortingComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  protected readonly displayedColumnsArray = displayedColumnsArray;
  protected readonly displayedColumnsName = displayedColumnsNameGuestsList;

  guests$: any = this.guestService.guestList$;

  showEstimate: boolean = false;

  @ViewChild(MatPaginator) protected paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(public guestService : GuestService, public dialog: MatDialog) {
    // Create 100 users
  }

  checkEstimate() {
    if (this.showEstimate) {
      this.showEstimate = !this.showEstimate;
    } else {
      this.showEstimate = true;
    }
  }

  openDialog(id : string): void {
    console.log("id", id)
    const dialogRef = this.dialog.open(CreateGuestComponent, {
      data : {id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onDelete(id : string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) this.guestService.deleteGuest(id).subscribe(res => {}, error => {}, () => {
        this.guestService.updateGuestList();
      });
    });
  }

  addGuest() {
    const dialogRef = this.dialog.open(CreateGuestComponent, {
      data : {id : null}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {

    this.guests$.subscribe(
      (response: any) => {
        response.forEach((item: { position: number; }, index: number) => {
          item.position = index + 1;
        });
        this.dataSource = new MatTableDataSource(response);

        if (this.paginator) this.dataSource.paginator = this.paginator;
        if (this.sort) this.dataSource.sort = this.sort;
      },
      (error: any) => {
        console.error('Error2:', error);
      },() => {

      }
    );
  }
}

