import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingInvitationListComponent } from './pages/guests/wedding-invitation-list/wedding-invitation-list.component';
import { TablePaginationFilteringSortingComponent } from './pages/guests/table-with-pagination-filtering-sorting/table-pagination-filtering-sorting.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderWeddingComponent } from './pages/Header/header-wedding/header-wedding.component';
import {MatIconModule} from "@angular/material/icon";
// @ts-ignore
import { CreateGuestComponent } from './pages/guests/create-guest/create-guest.component';
import { EditGuestComponent } from './pages/guests/edit-guest/edit-guest.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { WeddingSupplyListComponent } from './pages/supply/wedding-supply-list/wedding-supply-list.component';
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { WeddingCreateEditSuppliesComponent } from './pages/supply/wedding-create-edit-supplies/wedding-create-edit-supplies.component';
import { StoreModule } from '@ngrx/store';
import {suppliesReducer} from "./pages/supply/store/reducers/supplies.reducer";
import {EffectsModule} from "@ngrx/effects";
import {SuppliesEffects} from "./pages/supply/store/effects/supplies.effects";
import { ConfirmationDialogComponent } from './pages/utils/confirmation-dialog/confirmation-dialog.component';
import { WeddingStatisticsComponent } from './pages/statistics/wedding-statistics/wedding-statistics.component';
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
