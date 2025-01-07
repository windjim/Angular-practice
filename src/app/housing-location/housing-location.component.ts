import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit {

  @Input() housingLocation! :HousingLocation
  ngOnInit():void {
    // console.log('Price Component Init');
  }
  ngOnChanges() {
    // console.log('Price Component Input Changed');
  }
}
