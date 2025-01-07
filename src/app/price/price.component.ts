import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  template: `
   <!-- <ul>
    <li *ngFor="let item of data">{{ item }}</li>
  </ul> -->
  <span>價格: {{price}}</span>
  <span>{{ firstChange? '' : (isIncrease? '↑' : '↓')  }} </span>
  <button type="button" (click)="addPrice()">內部增加</button>
  <button type="button" (click)="reducePrice()">內部減少</button>
   <ng-content select=".title"></ng-content>
  `,
  styleUrls: ['./price.component.css']
})
export class PriceComponent  {
  // 匯入
  @Input() price!: number;
  // 變數宣告
  firstChange :boolean =  true
  lastPrice: number = 0;
  isIncrease: boolean = false

  addPrice(){
    this.price ++
  }
  reducePrice(){
    this.price --
  }
  data:string[] = [];
  // ngOnChanges(changes: SimpleChanges): void{
  //   console.log('Price Component Input Changed');
  //   this.firstChange = changes['price'].firstChange
  //   this.lastPrice = changes['price'].previousValue
  // }
  ngDoCheck() {
    console.log('Docheck')
    this.data.push('ngDoCheck');
    // if(this.price !== this.lastPrice ){
    //   this.firstChange = false
    //   this.isIncrease = this.price > this.lastPrice
    // }
    // this.lastPrice = this.price
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
    this.data.push('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
    this.data.push('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
    this.data.push('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.data.push('ngAfterViewChecked');
    console.log('ngAfterViewChecked')

  }

}
