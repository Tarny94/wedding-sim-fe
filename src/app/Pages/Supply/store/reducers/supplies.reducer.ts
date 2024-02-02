import { createReducer, on } from '@ngrx/store';

import {
  loadSupplies,
  loadSuppliesSuccessful,
  loadSuppliesFail,
  addSupplies,
  removeSupplies,
  addSuppliesSuccessful,
  addSuppliesFailure,
  updateSupplies,
  updateSuppliesSuccessful,
  updateSuppliesFailure, removeSuppliesSuccessful, removeSuppliesFailure
} from '../actions/supplies.actions';


import {Supply} from "../../../../interface/wedding-interfaces";
import {state} from "@angular/animations";

export interface SuppliesState {
    supplies : Supply[];
    error : string;
    status : 'pending' | 'error' | 'loading' | 'successful'
}

export enum Status {
    pending = "pending",
    error = "error",
    loading = "loading",
    successful = "successful"
}

export const initialSuppliesState : SuppliesState = {
    supplies : [],
    error : '',
    status : Status.pending
}


export const suppliesReducer = createReducer(
  initialSuppliesState,
  on(loadSupplies, (state) => ({ ...state, status : Status.loading })),
  on(loadSuppliesSuccessful, (state, {supplies}) => ({...state, supplies,  status: Status.successful })),
  on(loadSuppliesFail, (state, {error}) => ({ ...state, error: error, status: Status.error })),

  on(addSupplies, (state, {supply}) => ({ ...state, supplies: [...state.supplies, {...supply}],status:Status.loading})),
  on(addSuppliesSuccessful, (state) => ({ ...state, status:Status.successful})),
  on(addSuppliesFailure, (state, {error}) => ({ ...state, error, status: Status.error})),

  on(updateSupplies, (state, { id, updatedSupply }) => ({...state, supplies: state.supplies.map((supply) => (supply.id === id ? { ...supply, ...updatedSupply } : supply)), status: Status.loading})),
  on(updateSuppliesSuccessful, (state) => ({...state, status:Status.successful})),
  on(updateSuppliesFailure, (state, {error}) => ({...state, error, status: Status.error})),

  on(removeSupplies, (state, {id}) => ({
      ...state,
      supplies: state.supplies.filter((supply) => supply.id !== id),
    status: Status.loading
  })),
  on(removeSuppliesSuccessful, (state) => ({...state, status: Status.successful})),
  on(removeSuppliesFailure, (state, {error}) => ({...state, error, status: Status.error}))
)

