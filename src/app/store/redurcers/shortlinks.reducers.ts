import { EShortLinksActions, ShortLinksActions } from './../actions/shortlinks.actions';
import { ShortLinksState, InitialShortLinksState } from './../state/shortLinks.state';

export const shortLinksReducer = (
  state = InitialShortLinksState,
  action: ShortLinksActions
): ShortLinksState => {
  switch (action.type) {
    case EShortLinksActions.AddLinkrSuccess:
      return {
        ...state,
        shortLink: action.payload
      };
    case EShortLinksActions.ChangeNameLinkSuccses:
      return {
        ...state,
        shortLink: action.payload
      };
    default:
      return state;
  }
}
