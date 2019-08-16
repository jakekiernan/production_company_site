import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { TEAM_ITEMS, MANIFESTO_ITEMS} from '../../constants';
import { SetNavItem, OpenNav, CloseNav, OpenModal, CloseModal, OpenManifesto, CloseManifesto, NavScrolled, NavAtTop } from '../../actions';
import { iUiState, iAppState, iTeamItem, iManifestoItem } from '../../models';

@Component({
    selector: 'main-view',
    templateUrl: './main.view.html',
    styleUrls: ['./main.view.css']
})

export class MainView implements OnInit, OnDestroy {

  storeSubscription: Subscription;
  uiState: iUiState;
  teamItemList: Array<iTeamItem>;
  maniItemList: Array<iManifestoItem>;

  constructor(private store: Store<iAppState>) {
  }

  ngOnInit() {
    this.storeSubscription = this.store.select('ui')
      .subscribe(val => {
        this.uiState = val
      });
      this.teamItemList = TEAM_ITEMS;
      this.maniItemList = MANIFESTO_ITEMS;
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  handleNavItemActivation(eventData) {
    const payload: iTeamItem = TEAM_ITEMS.find(x => x.key === eventData);
    this.store.dispatch(new SetNavItem(payload));
  }

  openNav() {
    this.store.dispatch(new OpenNav());
  }

  closeNav() {
    this.store.dispatch(new CloseNav());
  }

  triggerModal(eventData) {
    const payload: iTeamItem = TEAM_ITEMS.find(x => x.key === eventData);
    this.store.dispatch(new OpenModal(payload));
  }

  closeModal() {
    this.store.dispatch(new CloseModal());
  }

  triggerManifestoItem(eventData) {
    const payload: iManifestoItem = MANIFESTO_ITEMS.find(x => x.number === eventData);
    this.store.dispatch(new OpenManifesto(payload));
  }

  closeManifesto() {
    this.store.dispatch(new CloseManifesto());    
  }

  navScrolled() {
    this.store.dispatch(new NavScrolled());
  }

  navAtTop() {
    this.store.dispatch(new NavAtTop());
  }

}

