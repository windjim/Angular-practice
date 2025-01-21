import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAModule } from '../test-a/test-a.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestAModule,
  ],
  exports: [
    TestAModule,
  ],
})
export class ServiceinAbModule { }
