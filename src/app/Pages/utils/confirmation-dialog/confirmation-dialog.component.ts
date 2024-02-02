import {Component, Inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {SuppliesService} from "../../supply/supplies.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {removeSupplies} from "../../supply/store/actions/supplies.actions";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
