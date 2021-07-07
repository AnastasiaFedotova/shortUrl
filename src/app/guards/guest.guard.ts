import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store, select } from '@ngrx/store';
import { AppState } from "../store/state/app.state";
import { selectedAuth } from "../store/selectors/auth.selectors";

@Injectable({ providedIn: "root" })
export class GuestGuard implements CanActivate {
  constructor(private store: Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(select(selectedAuth), map(value => {
      return !value
    }))
  }
}
