import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GuestService} from "../../guests/guest-service/guest.service";
import {GuestCalculation, SuppliesCalculation} from "../../../interface/wedding-interfaces";
import {SuppliesService} from "../../supply/supplies.service";

@Component({
  selector: 'app-wedding-statistics',
  templateUrl: './wedding-statistics.component.html',
  styleUrls: ['./wedding-statistics.component.scss']
})
export class WeddingStatisticsComponent implements OnInit{
  invitationsReceived = 40;
  totalInvitations = 50;


  guestCalculation : GuestCalculation = {
    totalGuests: 0,
    confirmedGuests: 0,
    totalAdults: 0,
    confirmedAdults: 0,
    totalChildren: 0,
    confirmedChildren: 0,
    totalLocalChildren: 0,
    confirmedLocalChildren: 0,
    totalLocalAdults: 0,
    confirmedLocalAdults: 0,
    totalDistanceChildren: 0,
    confirmedDistanceChildren: 0,
    totalDistanceAdults: 0,
    confirmedDistanceAdults: 0,
    totalInvitations: 0,
    totalInvited: 0,
  };

  suppliesCalculation : SuppliesCalculation = {
    incomeTotalGuests: 0,
    incomeConfirmedGuests: 0,
    totalWeddingCost: 0,
    totalPayed: 0,
    remainToBePay: 0,
    resultIncomeTotalGuests: 0,
    resultIncomeConfirmedGuests: 0,
    suppliesConfirmed: 0,
    suppliesPayed: 0,
    totalSupplies: 0,
  }

  chartOptionsGuests = {};
  chartOptionsIncome = {};
  chartOptionsCost = {}
  chartOptionsSupplies = {};

  constructor(private guestService : GuestService,private suppliesService : SuppliesService) {
  }

  ngOnInit(): void {
    this.guestService.getGuestsCalculate("MockedId").subscribe(
        (item ) => {
          this.guestCalculation = {...this.guestCalculation,...item};
          this.initChangeGuests();
          this.invitationsReceived = this.guestCalculation.totalInvited
          this.totalInvitations = this.guestCalculation.totalInvitations
        }, () => {}, ()=> {}
    );

    this.suppliesService.getSuppliesCalculate("MockedId").subscribe(
      (item ) => {
          this.suppliesCalculation = {...this.suppliesCalculation, ...item};
          this.initChangeSupplies();
        console.log("##", this.suppliesCalculation)
      }, () => {}, ()=> {}
    )
  }

  initChangeSupplies() {
    this.chartOptionsIncome = {
      animationEnabled: true,
      title:{
        text: "Estimate Income"
      },
      data: [{
        type: "doughnut",
        yValueFormatString: "#,###.##",
        indexLabel: "{name}",
        dataPoints: [
          { y: this.suppliesCalculation.incomeTotalGuests, name: "Total Guests($)" },
          { y: this.suppliesCalculation.incomeConfirmedGuests, name: "Confirmed Guests($)" },
          { y: this.suppliesCalculation.resultIncomeTotalGuests, name: "Gain / Lost Total Guests($)" },
          { y: this.suppliesCalculation.resultIncomeConfirmedGuests, name: "Gain / Lost Confirmed Guests($)" },
        ]
      }]
    }

    this.chartOptionsCost = {
      animationEnabled: true,
      title:{
        text: "Wedding Cost"
      },
      data: [{
        type: "doughnut",
        yValueFormatString: "#,###.##",
        indexLabel: "{name}",
        dataPoints: [
          { y: this.suppliesCalculation.totalWeddingCost, name: "Cost($)" },
          { y: this.suppliesCalculation.remainToBePay, name: "Remaining To Be Pay($)" },
          { y: this.suppliesCalculation.totalPayed, name: "Payed($)" },
        ]
      }]
    }

    this.chartOptionsSupplies = {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Wedding Supplies"
      },
      axisY: {
        title: "Costs",
        maximum: this.suppliesCalculation.totalSupplies
      },
      toolTip: {
        shared: true
      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "center",
        reversed: true
      },
      data: [
        {
          type: "stackedColumn100",
          name: "Confirmed",
          showInLegend: "true",
          indexLabel: "{y}",
          indexLabelPlacement: "inside",
          indexLabelFontColor: "white",
          dataPoints: [
            { y: this.suppliesCalculation.suppliesConfirmed, label: "Costs" },
            { y: this.suppliesCalculation.totalSupplies - this.suppliesCalculation.suppliesPayed, label: "Cost Payed" },
          ]
        },
        {
          type: "stackedColumn100",
          name: "Not Confirmed",
          showInLegend: "true",
          indexLabel: "{y}",
          indexLabelPlacement: "inside",
          indexLabelFontColor: "white",
          dataPoints: [
            { y: this.suppliesCalculation.totalSupplies - this.suppliesCalculation.suppliesConfirmed, label: "Cost Confirmed" },
            { y: this.suppliesCalculation.suppliesPayed, label: "Payed" },
          ]
        }
      ]
    };
  }

  initChangeGuests() {
    this.chartOptionsGuests = {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Wedding Guests Invitation"
      },
      axisY: {
        title: "Guests",
        maximum: this.guestCalculation.totalGuests,
      },
      toolTip: {
        shared: true
      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "center",
        reversed: true
      },
      data: [
        {
          type: "stackedColumn",
          name: "Adult",
          showInLegend: "true",
          indexLabel: "{y}",
          indexLabelPlacement: "inside",
          indexLabelFontColor: "white",
          dataPoints: [
            { y: this.guestCalculation.totalAdults, label: "Guests" },
            { y: this.guestCalculation.confirmedAdults, label: "Confirmed" },
            { y: this.guestCalculation.totalLocalAdults, label: "Local" },
            { y: this.guestCalculation.totalDistanceAdults, label: "Distance" },
            { y: this.guestCalculation.confirmedAdults, label: "Local Confirmed" },
            { y: this.guestCalculation.confirmedDistanceAdults, label: "Distance Confirmed" }
          ]
        },
        {
          type: "stackedColumn",
          name: "Children",
          showInLegend: "true",
          indexLabel: "{y}",
          indexLabelPlacement: "inside",
          indexLabelFontColor: "white",
          dataPoints: [
            { y: this.guestCalculation.totalChildren, label: "Guests" },
            { y: this.guestCalculation.confirmedChildren, label: "Confirmed" },
            { y: this.guestCalculation.confirmedLocalChildren, label: "Local" },
            { y: this.guestCalculation.totalDistanceChildren, label: "Distance" },
            { y: this.guestCalculation.confirmedLocalChildren, label: "Local Confirmed" },
            { y: this.guestCalculation.confirmedDistanceChildren, label: "Distance Confirmed" }
          ]
        }
      ]
    };
  }
}
