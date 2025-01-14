import { TestBed } from '@angular/core/testing';

import { CarRegistrationTrackerService } from './car-registration-tracker.service';

describe('CarRegistrationTrackerService', () => {
  let service: CarRegistrationTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRegistrationTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
