import { GoogleChartDirective } from '../index';
import { Component } from '@angular/core';

@Component({
  selector: 'friends-map',
  templateUrl: './friends-map.component.html',
  styleUrls: ['./friends-map.component.css']
})
export class FriendsMap {
  public map_ChartData = [
    ['City', 'Projects'],
    ['Aukland', 'Aukland'],
    ['Oahu', 'Oahu'],
    ['San Francisco', 'San Francisco'],
    ['Santa Barbara', 'Santa Barbara'],
    ['Los Angeles', 'Los Angeles'],
    ['Boulder', 'Boulder'],
    ['Austin', 'Austin'],
    ['New Orleans', 'New Orleans'],
    ['Detroit', 'Detroit'],
    ['New York', 'New York'],
    ['Newbury', 'Newbury'],
    ['Glasgow', 'Glasgow'],
    ['London', 'London'],
    ['Tokyo', 'Tokyo'],
    ['Koror', 'Koror']
  ];

  public map_ChartOptions = {
    displayMode: 'markers',
    datalessRegionColor: '#292E37',
    defaultColor: '#525174',
    forceIFrame: true,
    width: '100%',
    keepAspectRatio: true,
    legend: 'none'
  };
}
