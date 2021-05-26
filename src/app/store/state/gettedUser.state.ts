import { Users } from 'src/app/interface/users';

export interface GettedUserState {
  user: Users
}

export const InitialGettedUserState: GettedUserState = {
  user: null
}
