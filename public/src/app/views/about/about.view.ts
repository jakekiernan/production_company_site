import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { iUiState, iAppState } from '../../models';

import { NavScrolled, NavAtTop, OpenNav, CloseNav } from '../../actions';

@Component({
    selector: 'about-view',
    templateUrl: './about.view.html',
    styleUrls: ['./about.view.css']
})

export class AboutView implements OnInit, OnDestroy {

  storeSubscription: Subscription;
  uiState: iUiState;

  constructor(private store: Store<iAppState>) {}

  ngOnInit() {
    this.storeSubscription = this.store.select('ui')
      .subscribe(val => {
        this.uiState = val
      });
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

}