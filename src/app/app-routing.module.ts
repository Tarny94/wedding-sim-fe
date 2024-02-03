import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeddingSupplyListComponent} from "./Pages/Supply/wedding-supply-list/wedding-supply-list.component";
import {WeddingInvitationListComponent} from "./Pages/Guests/wedding-invitation-list/wedding-invitation-list.component";
import {WeddingStatisticsComponent} from "./Pages/statistics/wedding-statistics/wedding-statistics.component";

const routes: Routes = [
  { path: 'supplies', component: WeddingSupplyListComponent },
  { path: 'guests', component: WeddingInvitationListComponent },
  { path: 'statistics', component: WeddingStatisticsComponent },
  { path: '', redirectTo: '/guests', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
