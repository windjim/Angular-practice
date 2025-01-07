import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @Output() test1Emit = new EventEmitter<string>()

  addNewItem() {
    this.test1Emit.emit('value測試')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
