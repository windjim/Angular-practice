import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-august-practice',
  templateUrl: './august-practice.component.html',
  styleUrls: ['./august-practice.component.css']
})
export class AugustPracticeComponent implements OnInit {

  constructor() { }
  @ViewChild('myInput') myInput !: ElementRef;

  ngAfterViewInit() {
    console.log(this.myInput)
    // 在這裡操作 myInput 元素
    this.myInput.nativeElement.focus();
  }
  ngOnInit(): void {

  }

}
