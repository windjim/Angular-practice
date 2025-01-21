import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicein-ab',
  template: `
    <app-acomponent></app-acomponent>
    <app-bcomponent></app-bcomponent>
`
})
export class ServiceinABComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
