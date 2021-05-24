import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { ShortLinksState } from './../state/shortLinks.state';

const selectAuth = (state: AppState) => state.shortLink;

export const selectedShortLink = createSelector(
  selectAuth,
  (state: ShortLinksState) => state.shortLink
)
