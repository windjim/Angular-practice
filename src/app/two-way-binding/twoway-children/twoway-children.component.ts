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
  @Output() emitName2 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onInput(val: Event) {
    const inputValue = val.target as HTMLInputElement;
    this.emitName.emit(inputValue.value);
  }
  onInput2() {
    console.log(123)
  }
}
