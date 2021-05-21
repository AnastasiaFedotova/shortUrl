import { ELinksActions, LinksActions } from './../actions/links.actions';
import { LinksState, InitialLinksState } from './../state/links.state';

export const linksReducer = (
  state = InitialLinksState,
  action: LinksActions
): LinksState => {
  switch (action.type) {
    case ELinksActions.GetLinksSuccess:
      return {
        ...state,
        links: action.payload
      };
    default:
      return state;
  }
}
