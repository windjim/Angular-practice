import { Injectable } from '@angular/core';

@Injectable()
export class TestAService {
  constructor() { }
  private counter = 0;
  increment() {
    this.counter++;
  }
  getCounter() {
    return this.counter;
  }
}
