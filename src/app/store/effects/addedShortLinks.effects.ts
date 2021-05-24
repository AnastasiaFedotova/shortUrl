import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LinksServiceService } from 'src/app/services/links-service.service';
import { EAddedShortLinksActions, AddLink } from '../actions/addedShortlinks.actions';

@Injectable({ providedIn: "root" })
export class AddedShortLinksEffect {
  constructor(private actions$: Actions, private linksService: LinksServiceService) { }

  addLink$ = createEffect(() => this.actions$.pipe(
    ofType<AddLink>(EAddedShortLinksActions.AddLink),
    mergeMap((action) => this.linksService.generateLink(action.link)
      .pipe(
        map(shortLink => ({ type: EAddedShortLinksActions.AddLinkrSuccess, payload: shortLink }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
