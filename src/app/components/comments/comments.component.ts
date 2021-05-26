import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Comments } from 'src/app/interface/comments';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
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
  comments: Comments[];
  data;
  constructor(private store: Store<AppState>, private userRegistrationService: UserRegistrationService) { }

  ngOnInit() {
    this.store.dispatch(new GetComments(this.linkId));
    this.store.pipe(select(selectCommentsList)).subscribe(value => {
      this.comments = value;

      if (this.comments.length) this.userRegistrationService.findUserById(this.comments[0].id)
    });

    this.data = this.comments.map(comment => {
      debugger
      this.store.dispatch(new GetUser(comment.user_id));
      this.store.pipe(select(selectGettedUser)).subscribe(value => {
        return [comment, value]
      });
    })
  }
}
