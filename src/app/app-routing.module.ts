// 官方元件
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// 新增自訂元件
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TestRoutesComponent } from './test-routes/test-routes.component';
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
import { MessageBoardComponent } from './message-board/message-board.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ServiceinABComponent } from './servicein-ab/servicein-ab.component';
import { RouterTestComponent } from './router-test/router-test.component';
import { RouterTest1Component } from './router-test/router-test1/router-test1.component';
import { RouterTest2Component } from './router-test/router-test2/router-test2.component';

// 也可以設為變數
const homeRoute: Route = {
  path: 'home',
  component: HomeComponent,
};
const routes: Routes = [
  {
    path: '', redirectTo: '/pipes', pathMatch: 'full'
  },
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
    children: [
      {
        path: '',
        redirectTo: 'test1',
        pathMatch: 'full',
      },
      {
        path: 'test1',
        component: Test1Component,
      },
      {
        path: 'test2',
        component: Test2Component,
      },
      {
        path: 'test3',
        component: Test3Component,
      },
    ],
  },
  {
    path: 'binding',
    component: BindingComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'august',
    component: AugustPracticeComponent,
  },
  {
    path: 'accordion',
    component: MatAccordionComponent,
  },
  {
    path: 'matTable',
    component: MatTableComponent,
  },
  {
    path: 'twoWay',
    component: TwoWayBindingComponent,
  },
  {
    path: 'directive',
    component: DirectiveApplyComponent,
  },
  {
    path: 'message',
    component: MessageBoardComponent,
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent,
  },
  {
    path: 'ab-service',
    component: ServiceinABComponent,
  },
  {
    path: 'router-test',
    component: RouterTestComponent,
    children: [
      {
        path: '',
        redirectTo: 'router-test1',
        pathMatch: 'full',
      },
      {
        path: 'router-test1',
        component: RouterTest1Component,
      },
      {
        path: 'router-test2',
        component: RouterTest2Component,
      },
    ],
  },
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  },
  //萬用模組放最後
  {
    path:'**',
    component: RouterTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
