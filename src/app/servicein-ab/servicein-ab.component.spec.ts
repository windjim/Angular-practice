import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceinABComponent } from './servicein-ab.component';

describe('ServiceinABComponent', () => {
  let component: ServiceinABComponent;
  let fixture: ComponentFixture<ServiceinABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceinABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceinABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
