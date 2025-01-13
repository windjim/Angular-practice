import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveApplyComponent } from './directive-apply.component';

describe('DirectiveApplyComponent', () => {
  let component: DirectiveApplyComponent;
  let fixture: ComponentFixture<DirectiveApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
