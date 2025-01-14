// 官方元件
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// 新增自訂元件
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'
import {TestRoutesComponent} from './test-routes/test-routes.component'
import { Test1Component } from './test-routes/test1/test1.component';
import { Test2Component } from './test-routes/test2/test2.component';
import { Test3Component } from './test-routes/test3/test3.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { AugustPracticeComponent } from './august-practice/august-practice.component';
import { MatAccordionComponent } from './mat-accordion/mat-accordion.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectiveApplyComponent } from './directive-apply/directive-apply.component';

// 也可以設為變數
const homeRoute:Route = {
  path: 'home',
  component: HomeComponent,
}
const routes: Routes = [
  // {
  //   path: '', redirectTo: '/home', pathMatch: 'full'
  // },
  homeRoute,
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'locationDetail',
    component: DetailsComponent,
  },
  {
    path: 'testRoutes',
    component: TestRoutesComponent,
    children:[
      {
        path: 'test1',
        component:  Test1Component
      },
      {
        path: 'test2',
        component:  Test2Component
      },
      {
        path: 'test3',
        component:  Test3Component
      }
    ]
  },
  {
    path: 'binding',
    component:  BindingComponent
  },
  {
    path: 'pipes',
    component:  PipesComponent
  },
  {
    path: 'august',
    component:  AugustPracticeComponent
  },
  {
    path: 'accordion',
    component:  MatAccordionComponent
  },
  {
    path: 'matTable',
    component:  MatTableComponent
  },
  {
    path: 'twoWay',
    component:  TwoWayBindingComponent
  },
  {
    path: 'directive',
    component:  DirectiveApplyComponent
  },
  //萬用模組放最後
  // {
  //   path:'**',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
