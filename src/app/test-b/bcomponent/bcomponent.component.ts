import { Component, OnInit } from '@angular/core';
import { TestAService } from 'src/app/test-a/test-a.service';

@Component({
  selector: 'app-bcomponent',
  template: `
  <div style="outline: 1px solid blue;">
    <h2>這是B元件</h2>
    <p>Counter in B Component: {{  getCounter() }}</p>
  </div>
  `,
  // providers: [TestAService] // 如果要獨立就要在這宣告
})
export class BComponentComponent implements OnInit {
  counter: number = 0;
  constructor(private testAService: TestAService) {
  }
  getCounter() {
    return this.testAService.getCounter()
  }
  ngOnInit(): void {
  }

}
