import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCpComponent } from './test-cp.component';

describe('TestCpComponent', () => {
  let component: TestCpComponent;
  let fixture: ComponentFixture<TestCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
