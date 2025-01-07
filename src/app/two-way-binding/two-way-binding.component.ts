import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '練習';
  name2: string = '練習2';

  constructor() { }

  ngOnInit(): void {
  }
  receiveName(val: string) {
    this.name = val;
  }
}
