import { Action } from '@ngrx/store';

import { iTeamItem, iManifestoItem, iRoleItem } from '../models';

export const SET_NAV_ITEM  = 'SET_NAV_ITEM';
export const OPEN_NAV  = 'OPEN_NAV';
export const CLOSE_NAV  = 'CLOSE_NAV';
export const OPEN_MODAL  = 'OPEN_MODAL';
export const CLOSE_MODAL  = 'CLOSE_MODAL';
export const OPEN_MANIFESTO  = 'OPEN_MANIFESTO';
export const CLOSE_MANIFESTO  = 'CLOSE_MANIFESTO';
export const NAV_SCROLLED = 'NAV_SCROLLED';
export const NAV_AT_TOP = 'NAV_AT_TOP';
export const SET_ROLE = 'SET_ROLE';
export const CLEAR_REEL_SEL = 'CLEAR_REEL_SEL';

export class SetNavItem implements Action {
    readonly type = SET_NAV_ITEM;

    constructor(public payload: iTeamItem) {}
}

export class OpenNav implements Action {
    readonly type = OPEN_NAV;
}

export class CloseNav implements Action {
    readonly type = CLOSE_NAV;
}

export class OpenModal implements Action {
    readonly type = OPEN_MODAL;

    constructor(public payload: iTeamItem) {}
}

export class CloseModal implements Action {
    readonly type = CLOSE_MODAL;
}

export class OpenManifesto implements Action {
    readonly type = OPEN_MANIFESTO;

    constructor(public payload: iManifestoItem) {}
}

export class CloseManifesto implements Action {
    readonly type = CLOSE_MANIFESTO;
}

export class NavScrolled implements Action {
    readonly type = NAV_SCROLLED;
}

export class NavAtTop implements Action {
    readonly type = NAV_AT_TOP;
}

export class SetRole implements Action {
    readonly type = SET_ROLE;

    constructor(public payload: iRoleItem) {}
}

export class ClearReelSelect implements Action {
    readonly type = CLEAR_REEL_SEL;
}


export type All
    = SetNavItem
    | OpenNav
    | CloseNav
    | OpenModal
    | CloseModal
    | OpenManifesto
    | CloseManifesto
    | NavScrolled
    | NavAtTop
    | SetRole
    | ClearReelSelect;
