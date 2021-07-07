import { Links } from 'src/app/interface/links';

export interface ChangedShortLinksState {
  link: Links,
  changedShortLink: string
}

export const InitialChangedShortLinksState: ChangedShortLinksState = {
  link: null,
  changedShortLink: null
}
