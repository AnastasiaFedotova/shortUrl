import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserSessionService } from "../services/user-session.service";

@Injectable({ providedIn: "root" })
export class GuestGuard implements CanActivate {
  constructor(private userSession: UserSessionService) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userSession.isAut;
  }
}
