// 官方
import { Component, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
// 自訂
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

  // 點選物件
  selectId: number = -1;
  selectLocationItem: HousingLocation | undefined;

  // 表單建立
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  // 表單submit方法
  submitApplication() {
    this.housingService.submitApplication(
      // 用?? 空值合併符號是因為可能會回傳null
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    // 提交後使用reset方法來清空表單
    this.applyForm.reset();
  }

constructor(route :ActivatedRoute, private housingService :HousingService,private inj: Injector,){
  // 使用private直接本地匯入housingService
  // 傳入相對應id
  this.selectId = Number(route.snapshot.params['id'])
  }
  async ngOnInit() {
    // console.log('inj',this.inj.get(NgControl))
  // 透過id找到點選的物件
    this.selectLocationItem = await this.housingService.getLocaleDirection(this.selectId)
  }
}
