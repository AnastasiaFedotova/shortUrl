import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { LinksState } from './../state/links.state';

const selectLinks = (state: AppState) => state.links;

export const selectLinksList = createSelector(
  selectLinks,
  (state: LinksState) => state.links
)
