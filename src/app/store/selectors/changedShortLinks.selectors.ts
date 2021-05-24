import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { ChangedShortLinksState } from '../state/changedShortLinks.state';

const selectAuth = (state: AppState) => state.changedShortLink;

export const selectedChangedShortLink = createSelector(
  selectAuth,
  (state: ChangedShortLinksState) => state.changedShortLink
)
