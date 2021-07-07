import { Users } from 'src/app/interface/users';

export interface UsersState {
  user: Users,
  isUser: boolean
}

export const InitialUsersState: UsersState = {
  user: null,
  isUser: false
}
