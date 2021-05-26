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
    });
  }

  cancel() {
    this.commentForm.reset();
  }

  addComment() {
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
