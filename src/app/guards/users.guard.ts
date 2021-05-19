import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserSessionService } from "../services/user-session.service";

@Injectable({ providedIn: "root" })
export class UsersGuard implements CanActivate {
  private isUser: boolean;
  constructor(private userSession: UserSessionService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.userSession.getIsAut().subscribe((value) => {
      this.isUser = value;
    });

    return this.isUser;
  }
}
