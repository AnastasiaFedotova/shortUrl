import { Links } from 'src/app/interface/links';
import { ShortLinks } from 'src/app/interface/shortLinks';

export interface ShortLinksState {
  link: Links,
  shortLink: ShortLinks | string
}

export const InitialShortLinksState: ShortLinksState = {
  link: null,
  shortLink: null
}
