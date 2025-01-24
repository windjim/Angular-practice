import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTest2Component } from './router-test2.component';

describe('RouterTest2Component', () => {
  let component: RouterTest2Component;
  let fixture: ComponentFixture<RouterTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
