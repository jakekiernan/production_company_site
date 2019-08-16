import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { TEAM_ITEMS, ROLES_ITEMS } from '../../constants';
import { iUiState, iAppState, iTeamItem, iManifestoItem, iRoleItem } from '../../models';
import { NavScrolled, NavAtTop, OpenNav, CloseNav, SetRole, ClearReelSelect } from '../../actions';

@Component({
    selector: 'reels-view',
    templateUrl: './reels.view.html',
    styleUrls: ['./reels.view.css']
})

export class ReelsView implements OnInit, OnDestroy{

  storeSubscription: Subscription;
  uiState: iUiState;
  teamItemList: Array<iTeamItem>;
  rolesList: Array<iRoleItem>;

  constructor(private store: Store<iAppState>) {}

  ngOnInit() {
    this.storeSubscription = this.store.select('ui')
      .subscribe(val => {
        this.uiState = val
      });
      this.teamItemList = TEAM_ITEMS;
      this.rolesList = ROLES_ITEMS;
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  navScrolled() {
    this.store.dispatch(new NavScrolled());
  }

  navAtTop() {
    this.store.dispatch(new NavAtTop());
  }

  openNav() {
    this.store.dispatch(new OpenNav());
  }

  closeNav() {
    this.store.dispatch(new CloseNav());
  }

  roleSelection(roleKey) {
    const payload: iRoleItem = ROLES_ITEMS.find(x => x.key === roleKey);
    this.store.dispatch(new SetRole(payload));
  }

  clearReelSelection() {
    this.store.dispatch(new ClearReelSelect());
  }

}