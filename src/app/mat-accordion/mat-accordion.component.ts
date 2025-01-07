import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-accordion',
  templateUrl: './mat-accordion.component.html',
  styleUrls: ['./mat-accordion.component.css']
})
export class MatAccordionComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
