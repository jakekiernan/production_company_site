import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { iTeamItem, iRoleItem } from '../../models';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'team-reels',
  templateUrl: './team-reels.component.html',
  styleUrls: ['./team-reels.component.css']
})
export class TeamReels implements OnInit {

  @Input() teamList: Array<iTeamItem>;
  @Input() roles: Array<iRoleItem>;
  @Input() selectedRole: iRoleItem;
  @Output() selectRoleKey = new EventEmitter<number>();
  @Output() deselectRole = new EventEmitter();

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
        window.scroll(0, 0);
      }
    });
  }

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
    this.shuffle(this.teamList);
  }

  select(roleKey: number) {
    this.selectRoleKey.emit(roleKey);
    this.shuffle(this.teamList);
  }

  resetTeam(){
    this.shuffle(this.teamList);
    this.deselectRole.emit();
  }

}
