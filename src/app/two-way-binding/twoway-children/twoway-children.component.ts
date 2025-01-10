import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-twoway-children',
  templateUrl: './twoway-children.component.html',
  styleUrls: ['./twoway-children.component.css']
})
export class TwowayChildrenComponent implements OnInit {
  @Input() name: string = '';
  @Input() name2: string = '';
  @Output() emitName = new EventEmitter<string>();
  @Output() name2Change = new EventEmitter<string>();

  name3: string = '練習3';
  constructor() { }

  ngOnInit(): void {
  }
  onInput(val: Event) {
    const inputValue = val.target as HTMLInputElement;
    this.emitName.emit(inputValue.value);
  }
  onInput2() {
    this.name2Change.emit(this.name2);
  }
  // onInput3(val: Event) {
  //   const inputValue = val.target as HTMLInputElement;
  //   this.name2 = inputValue.value;
  // }
  onInput4(value: string) {
    this.name3 = value;
  }
}
