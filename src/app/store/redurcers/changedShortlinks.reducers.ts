import { EChangedShortLinksActions, ChangedShortLinksActions } from '../actions/changedShortlinks.actions';
import { ChangedShortLinksState, InitialChangedShortLinksState } from '../state/changedShortLinks.state';

export const changedShortLinksReducer = (
  state = InitialChangedShortLinksState,
  action: ChangedShortLinksActions
): ChangedShortLinksState => {
  switch (action.type) {
    case EChangedShortLinksActions.ChangeNameLinkSuccses:
      return {
        ...state,
        changedShortLink: action.payload
      };
    default:
      return state;
  }
}
