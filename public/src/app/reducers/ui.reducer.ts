import { TEAM_ITEMS, MANIFESTO_ITEMS, ROLES_ITEMS } from '../constants';
import * as Actions from '../actions';

const INITIAL_STATE = {
    activeNavItem: TEAM_ITEMS[0],
    activeManifestoItems: MANIFESTO_ITEMS[0],
    selectedRole: {key:0,role:undefined},
    navIsOpen: false,
    modalIsOpen: false,
    modalData: {},
    manifestoIsOpen: false,
    manifestoData: {},
    navIsScrolled: false
};

export type Action = Actions.All;

export function ui(state: any = INITIAL_STATE, action: Action) {

  switch (action.type) {

    case Actions.SET_NAV_ITEM:
      return Object.assign({}, state, {
        activeNavItem: action.payload,
        navIsOpen: false
      });

    case Actions.OPEN_NAV:
      return Object.assign({}, state, {
        navIsOpen: true
      });

    case Actions.CLOSE_NAV:
      return Object.assign({}, state, {
        navIsOpen: false
      });

    case Actions.OPEN_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: true,
        modalData: action.payload
      });

    case Actions.CLOSE_MODAL:
      return Object.assign({}, state, {
        modalIsOpen: false,
        modalData: {}
      });

    case Actions.OPEN_MANIFESTO:
      return Object.assign({}, state, {
        manifestoIsOpen: true,
        manifestoData: action.payload
      });

    case Actions.CLOSE_MANIFESTO:
      return Object.assign({}, state, {
        manifestoIsOpen: false,
        manifestoData: {}
      });

    case Actions.NAV_SCROLLED:
      return Object.assign({}, state, {
        navIsScrolled: true
      });

    case Actions.NAV_AT_TOP:
      return Object.assign({}, state, {
        navIsScrolled: false
      });

    case Actions.SET_ROLE:
      return Object.assign({}, state, {
        selectedRole: action.payload
      });

    case Actions.CLEAR_REEL_SEL:
      return Object.assign({}, state, {
        selectedRole: {key:0,role:undefined}
      })

    default:
      console.log(state)
      return state;

    }
}
