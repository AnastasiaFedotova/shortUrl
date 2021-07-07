import { EAddedShortLinksActions, AddedShortLinksActions } from '../actions/addedShortlinks.actions';
import { AddedShortLinksState, InitialAddedShortLinksState } from '../state/addedShortLinks.state';

export const addedShortLinksReducer = (
  state = InitialAddedShortLinksState,
  action: AddedShortLinksActions
): AddedShortLinksState => {
  switch (action.type) {
    case EAddedShortLinksActions.AddLinkrSuccess:
      return {
        ...state,
        addedShortLink: action.payload
      };
    default:
      return state;
  }
}
