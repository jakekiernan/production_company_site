import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { iTeamItem } from '../../models';

@Component({
    selector: 'circle-feature',
    templateUrl: './circle-feature.component.html',
    styleUrls: ['./circle-feature.component.css']
})
export class CircleFeature implements OnInit, AfterViewInit{

  @Input() itemList: Array<iTeamItem>;
  @Output() actionButtonEvent = new EventEmitter<string>();

  shuffle(array: any){
    for(var i = array.length -1; i > 0; i--){
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

    ngOnInit () {
      this.shuffle(this.itemList);
    }

    ngAfterViewInit(){
      let circles :HTMLCollectionOf<Element> = document.getElementsByClassName('circle');
      let texts :HTMLCollectionOf<Element> = document.getElementsByClassName('text');
      for(var i = 0; i < texts.length; i++){
        (function(i){
          texts[i].addEventListener("mouseover", function () {
            circles[i].setAttribute("style", "filter:grayscale(0);");
          });
          circles[i].addEventListener("mouseout", function () {
            circles[i].setAttribute("style", "filter:grayscale(100%);");
          });
        }(i));
      }
    }

    handleActionButtonClick(key) {
      this.actionButtonEvent.emit(key);
      let circles :HTMLCollectionOf<Element> = document.getElementsByClassName('circle');
      for(var i = 0; i < circles.length; i++){
        circles[i].setAttribute("style", "filter:grayscale(100%);");
      }
    }



}
