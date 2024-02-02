

export interface Guest {

}

export interface Supply {
  id?: string;
  supply : string,
  price: number,
  unit: number,
  totalPrice?: number,
  payed: number,
  confirmed: boolean,
  observation: string
}

export interface GuestCalculation {
    id? : string;
    totalGuests: number;
    confirmedGuests: number;
    totalAdults: number;
    confirmedAdults: number;
    totalChildren: number;
    confirmedChildren: number;
    totalLocalChildren: number;
    confirmedLocalChildren: number;
    totalLocalAdults: number;
    confirmedLocalAdults: number;
    totalDistanceChildren: number;
    confirmedDistanceChildren: number;
    totalDistanceAdults: number;
    confirmedDistanceAdults: number;
    totalInvitations: number;
    totalInvited: number;
}

export interface SuppliesCalculation {
   incomeTotalGuests: number;
   incomeConfirmedGuests: number;
   totalWeddingCost: number;
   totalPayed: number;
   remainToBePay: number;
   resultIncomeTotalGuests: number;
   resultIncomeConfirmedGuests: number;
   suppliesConfirmed: number;
   suppliesPayed: number;
   totalSupplies: number;
}
