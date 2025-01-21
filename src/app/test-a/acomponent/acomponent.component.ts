import { Component, OnInit } from '@angular/core';
import { TestAService } from '../test-a.service';

@Component({
  selector: 'app-acomponent',
  template: `
  <div style="outline: 1px solid red;">
    <h2>這是A元件</h2>
    <p>Counter in A Component: {{  getCounter() }}</p>
    <button (click)="increment()">Increment</button>
  </div>
`
})
export class AComponentComponent implements OnInit {
  constructor(private testAService: TestAService) {

  }

  counter: number = 0;
  increment() {
    this.testAService.increment();
  }
  getCounter() {
    return this.testAService.getCounter()
  }
  ngOnInit(): void {
  }

}
