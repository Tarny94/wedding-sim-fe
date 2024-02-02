import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {
  addSupplies,
  addSuppliesFailure,
  addSuppliesSuccessful,
  loadSupplies,
  loadSuppliesFail,
  loadSuppliesSuccessful,
  removeSupplies, removeSuppliesFailure,
  removeSuppliesSuccessful,
  updateSupplies,
  updateSuppliesFailure,
  updateSuppliesSuccessful
} from "../actions/supplies.actions";
import {catchError, from, map, of, switchMap, tap, withLatestFrom} from "rxjs";
// @ts-ignore
import {AppState} from "../models/supplies.state";
import {Store} from "@ngrx/store";
// @ts-ignore
import {SuppliesService} from "../../supplies.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {selectAddedSupply, selectAllSupplies, selectSupplyById} from "../selectors/supplies.selectors";


@Injectable()
export class SuppliesEffects {

    constructor(private action$ : Actions, private store: Store<AppState>, private suppliesService: SuppliesService) {
    }

    loadSupplies$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadSupplies),
      switchMap(() =>
        this.suppliesService.getSupplies().pipe(
          map((supplies) => loadSuppliesSuccessful({supplies})),
          catchError((error) => of(loadSuppliesFail({error})))
        )
      )
    ));

    removeSupply$ = createEffect(() =>
      this.action$.pipe(
        ofType(removeSupplies),
        withLatestFrom(this.store.select(selectAddedSupply)),
        switchMap(([action]) =>
          this.suppliesService.removeSupply(action.id).pipe(
            map(() => removeSuppliesSuccessful()),
            catchError((error) => of(removeSuppliesFailure(error)))
          )
        )
      )
    )

    saveSupplies$ = createEffect(() =>
    this.action$.pipe(
      ofType(addSupplies),
      withLatestFrom(this.store.select(selectAddedSupply)),
      switchMap(([action, supply]) =>
        this.suppliesService.createSupply(supply).pipe(
          map(() => addSuppliesSuccessful()),
          catchError((error) => of(addSuppliesFailure({error})))
        ).pipe(
          tap(() =>  this.store.dispatch(loadSupplies()))
        ))
    ));

  updateSupply$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateSupplies),
      withLatestFrom(this.store),
      switchMap(([action, state]) => {
        const supplies = selectAllSupplies(state);
        const supplyToUpdate = supplies.find(supply => supply.id === action.id);
        if (!supplyToUpdate) {
          return of(updateSuppliesFailure({ error: 'Supply not found' }));
        }

        const updatedSupply = { ...supplyToUpdate, ...action.updatedSupply };

        return this.suppliesService.updateSupply(action.id,updatedSupply).pipe(
          map(() => updateSuppliesSuccessful()),
          catchError(error => of(updateSuppliesFailure({ error })))
        ).pipe(
          tap(() =>  this.store.dispatch(loadSupplies()))
        );
      })
    )
  );
}
