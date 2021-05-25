import { ShortLinks } from '../../interface/shortLinks';

export interface UsersLinksState {
  usersLinks: ShortLinks[],
}

export const InitialUsersLinksState: UsersLinksState = {
  usersLinks: [],
}
