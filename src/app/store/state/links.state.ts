import { ShortLinks } from '../../interface/shortLinks';

export interface LinksState {
  links: ShortLinks[],
}

export const InitialLinksState: LinksState = {
  links: [],
}
