import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { LinksServiceService } from 'src/app/services/links-service.service';
import { EShortLinksActions, AddLink, ChangeNameLink } from './../actions/shortlinks.actions';

@Injectable({ providedIn: "root" })
export class ShortLinksEffect {
  constructor(private actions$: Actions, private linksService: LinksServiceService) { }

  addLink$ = createEffect(() => this.actions$.pipe(
    ofType<AddLink>(EShortLinksActions.AddLink),
    mergeMap((action) => this.linksService.generateLink(action.link)
      .pipe(
        map(shortLink => ({ type: EShortLinksActions.AddLinkrSuccess, payload: shortLink }))
      ))
  )
  );

  changeNameLink$ = createEffect(() => this.actions$.pipe(
    ofType<ChangeNameLink>(EShortLinksActions.ChangeNameLink),
    mergeMap((action) => this.linksService.changeNameLink(action.link)
      .pipe(
        map(shortLink => ({ type: EShortLinksActions.ChangeNameLinkSuccses, payload: shortLink }))
      ))
  )
  );
}
