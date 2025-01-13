// 官方元件
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

// 自訂服務
import { HousingService } from './housing.service';

// 自訂元件
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { PriceComponent } from './price/price.component';
import { MyAppComponent } from './my-app/my-app.component';
import { DetailsComponent } from './details/details.component';
import { TestRoutesComponent } from './test-routes/test-routes.component';
import { Test1Component } from './test-routes/test1/test1.component'
import { Test2Component } from './test-routes/test2/test2.component'
import { Test3Component } from './test-routes/test3/test3.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { MaterialModule } from './modules/material.module';

// 自訂通道
import { MinGoYearPipe } from './min-go-year.pipe';
import { AugustPracticeComponent } from './august-practice/august-practice.component';
import { MatAccordionComponent } from './mat-accordion/mat-accordion.component';
import { TestCpComponent } from './testNew/test-cp/test-cp.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TwowayChildrenComponent } from './two-way-binding/twoway-children/twoway-children.component';
import { DirectiveTestDirective } from './directive-test.directive';
import { DirectiveApplyComponent } from './directive-apply/directive-apply.component';
import { AttriDirectiveDirective } from './attri-directive.directive'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    PriceComponent,
    MyAppComponent,
    DetailsComponent,
    TestRoutesComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    BindingComponent,
    PipesComponent,
    MinGoYearPipe,
    AugustPracticeComponent,
    MatAccordionComponent,
    TestCpComponent,
    MatTableComponent,
    TwoWayBindingComponent,
    TwowayChildrenComponent,
    DirectiveTestDirective,
    DirectiveApplyComponent,
    AttriDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
