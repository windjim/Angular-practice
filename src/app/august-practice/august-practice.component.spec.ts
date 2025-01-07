import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustPracticeComponent } from './august-practice.component';

describe('AugustPracticeComponent', () => {
  let component: AugustPracticeComponent;
  let fixture: ComponentFixture<AugustPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugustPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
