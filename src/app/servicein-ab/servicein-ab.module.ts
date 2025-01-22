import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAModule } from '../test-a/test-a.module';
import { TestBModule } from '../test-b/test-b.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestAModule,
  ],
  exports: [
    TestAModule,
    TestBModule,
  ],
})
export class ServiceinAbModule { }
