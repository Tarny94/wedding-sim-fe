import {AppState} from "../models/supplies.state";
import {createSelector} from "@ngrx/store";
import {SuppliesState} from "../reducers/supplies.reducer";
import {Supply} from "../../../../interface/wedding-interfaces";


export const selectSupplies = (state: AppState) => state.supplies;

export const selectAllSupplies = createSelector(
  selectSupplies,
  (state: SuppliesState) => state.supplies
)

export const selectAddedSupply = createSelector(
  selectAllSupplies,
  (supplies) => supplies[supplies.length - 1] // Assuming the last added supply is the "selected added supply"
);

// export const selectSupplyById = createSelector(
//   selectAllSupplies,
//   (supplies : Supply[], props : string) => supplies.find(supply => supply.id === props)
// );

export const selectSupplyById = createSelector(
  selectAllSupplies,
  (supplies: Supply[], props: {id: string}) => supplies.find(supply => supply.id === props.id)
);
