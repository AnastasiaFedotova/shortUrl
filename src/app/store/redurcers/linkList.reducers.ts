import { ELinksActions, LinksActions } from '../actions/linkList.actions';
import { LinksState, InitialLinksState } from '../state/linkList.state';

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
    case ELinksActions.GetTagsLinksSuccess:
      return {
        ...state,
        links: action.payload
      };
    default:
      return state;
  }
}
