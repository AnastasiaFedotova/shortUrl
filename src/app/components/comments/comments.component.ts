import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comments } from 'src/app/interface/comments';
import { Users } from 'src/app/interface/users';
import { GetComments } from 'src/app/store/actions/commentsList.actions';
import { GetUser } from 'src/app/store/actions/gettedUser.actions';
import { selectCommentsList } from 'src/app/store/selectors/commentsList.selectors';
import { selectGettedUser } from 'src/app/store/selectors/gettedUser.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { selectedAuth } from 'src/app/store/selectors/auth.selectors';
import { selectedAuthUserId } from 'src/app/store/selectors/authUsers.selectors';
import { AddComment } from 'src/app/store/actions/addedComment.actions';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() linkId: string;
  commentForm: FormGroup;
  comments: Comments[];
  commentsData: Array<[Comments, Users]> = [];
  isAuthorized: boolean;
  authUser: Users;

  constructor(private store: Store<AppState>) {
    this.commentForm = new FormGroup({
      'comment': new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(100)])
    });
  }

  ngOnInit() {
    this.store.dispatch(new GetComments(this.linkId));
    this.store.pipe(select(selectCommentsList)).subscribe(value => {
      this.comments = value;

      if (this.comments.length) this.getUsers();
    })

    this.store.pipe(select(selectedAuth)).subscribe(isAuth => {
      this.isAuthorized = isAuth;
    })

    this.store.pipe(select(selectedAuthUserId)).subscribe(id => {
      if (id) {
        this.store.dispatch(new GetUser(id));
        this.store.pipe(select(selectGettedUser)).subscribe(user => {
          if (user) this.authUser = user;
        });
      }
    })
  }

  cancel() {
    this.commentForm.reset();
  }

  addComment() {
    debugger
    debugger
    this.store.dispatch(new AddComment({
      message: this.commentForm.controls.comment.value,
      user_id: this.authUser.id,
      link_id: this.linkId
    }));
    this.commentForm.reset();
  }

  getUsers() {
    this.comments.forEach((comment) => {
      this.store.dispatch(new GetUser(comment.user_id));

      this.store.pipe(select(selectGettedUser)).subscribe(value => {
        if (value) this.commentsData.push([comment, value]);
      });
    })
  }
}
