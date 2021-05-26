import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommentsService } from 'src/app/services/comments.service';
import { EAddedCommentActions, AddComment } from '../actions/addedComment.actions';

@Injectable({ providedIn: "root" })
export class AddedCommentsEffect {
  constructor(private actions$: Actions, private commentsService: CommentsService) { }

  addComment$ = createEffect(() => this.actions$.pipe(
    ofType<AddComment>(EAddedCommentActions.AddComment),
    mergeMap((action) => this.commentsService.addComment(action.comment)
      .pipe(
        map(commentId => ({ type: EAddedCommentActions.AddCommentSuccess, payload: commentId }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
