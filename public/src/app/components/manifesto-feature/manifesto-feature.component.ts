import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iManifestoItem } from '../../models';

@Component({
  selector: 'manifesto-feature',
  templateUrl: './manifesto-feature.component.html',
  styleUrls: ['./manifesto-feature.component.css']
})
export class ManifestoFeature {

  @Input() manifestoList: Array<iManifestoItem>;
  @Input() isOpen: boolean;
  @Input() manifestoData: iManifestoItem;
  @Output() actionButtonEvent = new EventEmitter<string>();
  @Output() manifestoCloseEvent = new EventEmitter<any>();


  handleActionButtonClick(number) {
    if (this.isOpen && number == this.manifestoData.number) {
      this.manifestoCloseEvent.emit()
    } else {
      this.actionButtonEvent.emit(number);
    }
  }

}
