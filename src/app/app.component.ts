import { Component } from '@angular/core';

@Component({
  selector: 'appRoot',
  template: ` <main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <!-- <app-home></app-home> -->
      <!-- <my-app></my-app> -->
      <ul>
        <li>
          <a [routerLink]="['/home']">Home</a>
        </li>
        <li>
          <a [routerLink]="['/locationDetail']">locationDetail</a>
        </li>
        <li>
          <a [routerLink]="['/testRoutes']">TestRoutes</a>
        </li>
        <li>
          <a [routerLink]="['/binding']">Binding</a>
        </li>
        <li>
          <a [routerLink]="['/pipes']">Pipes</a>
        </li>
        <li>
          <a [routerLink]="['/august']">August</a>
        </li>
        <li>
          <a [routerLink]="['/accordion']">Accordion</a>
        </li>
        <li>
          <a [routerLink]="['/matTable']">matTable</a>
        </li>
        <li>
          <a [routerLink]="['/twoWay']">twoWay</a>
        </li>
        <li>
          <a [routerLink]="['/directive']">directive</a>
        </li>
        <li>
          <a [routerLink]="['/message']">Message-board</a>
        </li>
        <li>
          <a [routerLink]="['/to-do-list']">To-do-list</a>
        </li>
        <li>
          <a [routerLink]="['/ab-service']">ab-service</a>
        </li>
        <li>
          <a [routerLink]="['/router-test']">router-test</a>
        </li>
      </ul>

      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '練習1';
}
