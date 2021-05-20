import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserSessionService } from "../services/user-session.service";

@Injectable({ providedIn: "root" })
export class UsersGuard implements CanActivate {
  constructor(private userSessionService: UserSessionService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userSessionService.getIsAut();
  }
}
