import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iTeamItem } from '../../models';

@Component({
    selector: 'app-modal',
    templateUrl: './app-modal.component.html',
    styleUrls: ['./app-modal.component.css']
})
export class AppModal {

  @Input() isOpen: boolean;
  @Input() modalData: iTeamItem;
  @Output() modalCloseEvent = new EventEmitter<any>();

  handleModalClose() {
    this.modalCloseEvent.emit();
  }

}
