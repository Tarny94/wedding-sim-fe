import {Component, OnInit} from '@angular/core';
import {CreateGuestComponent} from "../create-guest/create-guest.component";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-wedding-invitation-list',
  templateUrl: './wedding-invitation-list.component.html',
  styleUrls: ['./wedding-invitation-list.component.scss'],
})
export class WeddingInvitationListComponent implements OnInit{

  ngOnInit(): void {
  }
}
