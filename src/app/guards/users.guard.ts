import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { UserSessionService } from "../services/user-session.service";

@Injectable({ providedIn: "root" })
export class UsersGuard implements CanActivate {
  isUser: boolean;
  private subscription: Subscription;
  constructor(private userSession: UserSessionService) { }

  ngOnInit() {
    this.subscription = this.userSession.getIsAut().subscribe(value => {
      this.isUser = value;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.subscription = this.userSession.getIsAut().subscribe((value) => {
      console.log(value)
      this.isUser = value;
    });

    return this.isUser;
  }
}
