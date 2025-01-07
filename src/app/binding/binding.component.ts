import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  testName: string = '目前在使用aria-label練習'
  testName1: string = '目前在使用超連結配aria-label練習'
  isHighlighted: boolean = true;
  clickMessage: any='';
  twoWayBinding: string = '123'
  test:boolean = true

  // @Input()  size!: number | string;
  // @Output() sizeChange = new EventEmitter<number>();

  // dec() { this.resize(-1); }
  // inc() { this.resize(+1); }

  // resize(delta: number) {
  //   this.size = Math.min(40, Math.max(8, +this.size + delta));
  //   this.sizeChange.emit(this.size);
  // }

  get backgroundColor() {
    return this.isHighlighted ? 'yellow' : 'red';
  }
  onKeydown(event: object): void {
    console.log('Ctrl + E pressed', event);
  }
  onKeyup(event: object): void {
    console.log( event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
