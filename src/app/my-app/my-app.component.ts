import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-price [price]="price.value">
    <p class="title">這是content </p>
  </app-price>
  <button type="button" (click)="addPrice()">外部增加</button>
  <button type="button" (click)="reducePrice()">外部減少</button>
  `,
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent  {

  price = {
    value: 100
  }
  addPrice(){
    this.price.value ++
  }
  reducePrice(){
    this.price.value --
  }
  ngOnInit(): void {
    // setTimeout(()=>{this.value = 150}, 5000)
  }
}
