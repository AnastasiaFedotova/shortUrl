import { ShortLinks } from '../../interface/shortLinks';

export interface UsersLinksState {
  links: ShortLinks[],
}

export const InitialUsersLinksState: UsersLinksState = {
  links: [],
}
