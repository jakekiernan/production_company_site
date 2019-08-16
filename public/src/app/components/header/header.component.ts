import { Component, HostListener, Inject, EventEmitter, Output, Input } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class Header {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @Input() isScrolled: boolean;
  @Output() navScrollEvent = new EventEmitter<any>();
  @Output() navAtTop = new EventEmitter<any>();
  @Output() openNavEvent = new EventEmitter<any>();
  @Output() closeNavEvent = new EventEmitter<any>();


  @HostListener("window:scroll", [])
  onWindowScroll(){
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 0) {
      this.navScrollEvent.emit();
    } else {
      this.navAtTop.emit();
    }
  }

  openNav() {
    this.openNavEvent.emit();
  }

  handleCloseNavClick() {
    this.closeNavEvent.emit();
  }

}
