import { Links } from 'src/app/interface/links';
import { ShortLinks } from 'src/app/interface/shortLinks';

export interface AddedShortLinksState {
  link: Links,
  addedShortLink: ShortLinks
}

export const InitialAddedShortLinksState: AddedShortLinksState = {
  link: null,
  addedShortLink: null
}
