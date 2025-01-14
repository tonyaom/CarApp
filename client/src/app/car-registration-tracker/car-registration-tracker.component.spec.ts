import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegistrationTrackerComponent } from './car-registration-tracker.component';

describe('CarRegistrationTrackerComponent', () => {
  let component: CarRegistrationTrackerComponent;
  let fixture: ComponentFixture<CarRegistrationTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRegistrationTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarRegistrationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
