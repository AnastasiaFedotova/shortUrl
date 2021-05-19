import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { UserSessionService } from "../services/user-session.service";

@Injectable({ providedIn: "root" })
export class GuestGuard implements CanActivate {
  private isUser: boolean;
  constructor(private userSessionService: UserSessionService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.userSessionService.getIsAut().subscribe((value) => {
      this.isUser = value;
    });

    return !this.isUser;
  }
}
