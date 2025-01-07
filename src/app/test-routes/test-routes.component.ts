import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-routes',
  templateUrl: './test-routes.component.html',
  styleUrls: ['./test-routes.component.css']
})
export class TestRoutesComponent implements OnInit {
  items :string[] = ['item1', 'item2']
  receiveItem(val:string){
    console.log(val)
    this.items.push(val)
  }

  isUnchanged: boolean = true
  // classes = {
  //   'blue': true,
  //   'bold': false,
  //   'italic': false
  // };
  // classes =['blue', 'bold']
  classes: string = 'red'

  constructor() { }

  ngOnInit(): void {
  }

}
