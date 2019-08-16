import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { iUiState, iAppState } from '../../models';
import { OpenNav, CloseNav } from '../../actions';

@Component({
    selector: 'work-view',
    templateUrl: './work.view.html',
    styleUrls: ['./work.view.css']
})

export class WorkView {

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
  
  openNav() {
    this.store.dispatch(new OpenNav());
  }

  closeNav() {
    this.store.dispatch(new CloseNav());
  }

}