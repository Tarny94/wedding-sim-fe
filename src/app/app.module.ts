import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingInvitationListComponent } from './Pages/Guests/wedding-invitation-list/wedding-invitation-list.component';
import { TablePaginationFilteringSortingComponent } from './Pages/Guests/table-with-pagination-filtering-sorting/table-pagination-filtering-sorting.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderWeddingComponent } from './Pages/Header/header-wedding/header-wedding.component';
import {MatIconModule} from "@angular/material/icon";
// @ts-ignore
import { CreateGuestComponent } from './Pages/Guests/create-guest/create-guest.component';
import { EditGuestComponent } from './Pages/Guests/edit-guest/edit-guest.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { WeddingSupplyListComponent } from './Pages/Supply/wedding-supply-list/wedding-supply-list.component';
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { WeddingCreateEditSuppliesComponent } from './Pages/Supply/wedding-create-edit-supplies/wedding-create-edit-supplies.component';
import { StoreModule } from '@ngrx/store';
import {suppliesReducer} from "./Pages/Supply/store/reducers/supplies.reducer";
import {EffectsModule} from "@ngrx/effects";
import {SuppliesEffects} from "./Pages/Supply/store/effects/supplies.effects";
import { ConfirmationDialogComponent } from './Pages/utils/confirmation-dialog/confirmation-dialog.component';
import { WeddingStatisticsComponent } from './Pages/statistics/wedding-statistics/wedding-statistics.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    WeddingInvitationListComponent,
    HeaderWeddingComponent,
    CreateGuestComponent,
    EditGuestComponent,
    WeddingSupplyListComponent,
    WeddingCreateEditSuppliesComponent,
    ConfirmationDialogComponent,
    WeddingStatisticsComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TablePaginationFilteringSortingComponent,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    MatSortModule,
    MatCheckboxModule,
    StoreModule.forRoot({supplies: suppliesReducer}),
    EffectsModule.forRoot([SuppliesEffects]),
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
