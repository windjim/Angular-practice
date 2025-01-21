import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAService } from './test-a.service';
import { AComponentComponent } from './acomponent/acomponent.component';



@NgModule({
  declarations: [
    AComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AComponentComponent
  ],
  providers:[TestAService]
})
export class TestAModule { }
