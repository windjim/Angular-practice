import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTest1Component } from './router-test1.component';

describe('RouterTest1Component', () => {
  let component: RouterTest1Component;
  let fixture: ComponentFixture<RouterTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterTest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
