import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnsureLoginGuard } from './ensure-login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canDeactivate: [EnsureLoginGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModulesRoutingModule { }
