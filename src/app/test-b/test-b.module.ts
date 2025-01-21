import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAModule } from '../test-a/test-a.module';
import { BComponentComponent } from './bcomponent/bcomponent.component';
import { TestAService } from '../test-a/test-a.service';



@NgModule({
  declarations: [
    BComponentComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    BComponentComponent
  ],
  // providers:[TestAService]
})
export class TestBModule { }
