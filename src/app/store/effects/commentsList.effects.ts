import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CommentsService } from '../../services/comments.service';
import { ECommentsActions, GetComments } from '../actions/commentsList.actions';

@Injectable({ providedIn: "root" })
export class CommentsEffect {
  constructor(private actions$: Actions, private commentsService: CommentsService) { }

  getComments$ = createEffect(() => this.actions$.pipe(
    ofType<GetComments>(ECommentsActions.GetComments),
    mergeMap((action) => this.commentsService.readComments(action.linksId)
      .pipe(
        map(comments => ({ type: ECommentsActions.GetCommentsSuccess, payload: comments }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
