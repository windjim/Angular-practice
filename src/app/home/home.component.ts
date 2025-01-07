// 官方
import { Component } from '@angular/core';

// interface
import { HousingLocation } from '../housinglocation'

// service
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent  {

  // 接收API資料
  housingLocationList: HousingLocation[] = [];
  housingLocationList2: HousingLocation[] =[]
  // 本地資料/篩選資料
  filterLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {}
   async ngOnInit()  {
    this.housingLocationList = await this.housingService.getAllLocation()
    // this.filterLocationList = this.housingLocationList

    this.housingService.getAllLocation2().subscribe(
      resFilterData => {
        this.housingLocationList2 = resFilterData;
        this.filterLocationList = this.housingLocationList2
        console.log('Housing location data:', this.housingLocationList2);
      },
      error => {
        console.error('Error fetching housing location:', error);
      }
    );
  }
  // 搜尋功能
  filterLocations(text :string){
    if(!text) {
      this.filterLocationList = this.housingLocationList
      return
    }
    // RegExp是JavaScript中的一個內建對象，用於創建正則表達式
    const regexFilter = new RegExp(text, 'i');
    this.filterLocationList = this.housingLocationList.filter((locationItem) => {
      return  regexFilter.test(locationItem.city)
    })
    // console.log(this.filterLocationList)
  }
}
