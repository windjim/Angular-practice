import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayChildrenComponent } from './twoway-children.component';

describe('TwowayChildrenComponent', () => {
  let component: TwowayChildrenComponent;
  let fixture: ComponentFixture<TwowayChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowayChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
