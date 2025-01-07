import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError, Subscription } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  // API相關
  url = 'http://localhost:3000/locations';
  httpService!: HttpClient

  // 遠端資料
  housingLocationList!: HousingLocation[] ;
  subscription !:Subscription

  // 取所有資料方法
  async getAllLocation(): Promise<HousingLocation[]> {
    try {
      const resAllData = await this.http.get<HousingLocation[]>(this.url).toPromise();
      return resAllData ?? [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  // 取單一資料方法
  async getLocaleDirection(id: number): Promise<HousingLocation | undefined> {
    try {
      const resFilterData = await this.http.get<HousingLocation | undefined>(`${this.url}/${id}`).toPromise()
      return resFilterData
    } catch (error) {
      console.log(error)
      return
    }
  }

  getAllLocation2(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  // 讀取表單資料
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor(private http: HttpClient) {
    // this.getAllLocation2()
  }
}
