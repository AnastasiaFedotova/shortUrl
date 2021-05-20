import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserSessionService } from "../services/user-session.service";

@Injectable({ providedIn: "root" })
export class GuestGuard implements CanActivate {
  constructor(private userSessionService: UserSessionService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userSessionService.getIsAut().pipe(map(value => {
      return !value
    })
    )
  }
}
