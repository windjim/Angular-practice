import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-test',
  templateUrl: './router-test.component.html',
  styleUrls: ['./router-test.component.css']
})
export class RouterTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.config);
  }

}
