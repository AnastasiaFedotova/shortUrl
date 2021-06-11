import { Users } from 'src/app/interface/users';

export interface GettedAuthUserState {
  user: Users
}

export const InitialGettedAuthUserState: GettedAuthUserState = {
  user: null
}
