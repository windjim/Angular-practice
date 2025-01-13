import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-apply',
  templateUrl: './directive-apply.component.html',
  styleUrls: ['./directive-apply.component.css']
})
export class DirectiveApplyComponent implements OnInit {
  condition: boolean = false;
  color: string= 'red';
  constructor() { }

  ngOnInit(): void {
  }

}
