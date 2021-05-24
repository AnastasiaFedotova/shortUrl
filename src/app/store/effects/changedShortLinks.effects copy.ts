import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LinksServiceService } from 'src/app/services/links-service.service';
import { EChangedShortLinksActions, ChangedNameLink } from '../actions/changedShortlinks.actions';

@Injectable({ providedIn: "root" })
export class ChangedShortLinksEffect {
  constructor(private actions$: Actions, private linksService: LinksServiceService) { }

  changeNameLink$ = createEffect(() => this.actions$.pipe(
    ofType<ChangedNameLink>(EChangedShortLinksActions.ChangeNameLink),
    mergeMap((action) => this.linksService.changeNameLink(action.link)
      .pipe(
        map(shortLink => ({ type: EChangedShortLinksActions.ChangeNameLinkSuccses, payload: shortLink }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
