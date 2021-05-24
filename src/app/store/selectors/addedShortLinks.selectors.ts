import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { AddedShortLinksState } from '../state/addedShortLinks.state';

const selectAuth = (state: AppState) => state.addedShortLink;

export const selectedAddedShortLink = createSelector(
  selectAuth,
  (state: AddedShortLinksState) => state.addedShortLink
)
