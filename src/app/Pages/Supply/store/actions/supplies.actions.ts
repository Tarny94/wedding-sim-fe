import {createAction, props} from "@ngrx/store";
import {Supply} from "../../../../interface/wedding-interfaces";



export const loadSupplies = createAction('[Supplies Component] Load')

export const loadSuppliesSuccessful = createAction('[Supplies Component] Load Successful', props<{ supplies: Supply[] }>())

export const loadSuppliesFail = createAction('[Supplies Component] Load Fail', props<{ error: string }>())

export const addSupplies = createAction('[Supplies Component] Add', props<{ supply: Supply }>())

export const addSuppliesSuccessful = createAction('[Supplies Component] Add Successful')

export const addSuppliesFailure = createAction('[Supplies Component] Add Failure', props<{ error: string }>())

export const updateSupplies = createAction('[Supplies Component] Update', props<{id: string; updatedSupply: Supply }>())

export const updateSuppliesSuccessful = createAction('[Supplies Component] Update Successful')

export const updateSuppliesFailure = createAction('[Supplies Component] Update Failure', props<{ error: string }>())

export const removeSupplies = createAction('[Supplies Component] Delete', props<{ id : string }>())
export const removeSuppliesSuccessful = createAction('[Supplies Component] Delete Successful')
export const removeSuppliesFailure = createAction('[Supplies Component] Delete Failure', props<{ error : string }>())

