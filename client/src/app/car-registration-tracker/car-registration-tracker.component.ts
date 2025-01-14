import { Component, effect, inject } from '@angular/core';
import { Car } from '../_models/car';
import { CarRegistrationTrackerService } from '../_services/car-registration-tracker.service';

@Component({
  selector: 'app-car-registration-tracker',
  standalone: true,
  imports: [],
  templateUrl: './car-registration-tracker.component.html',
  styleUrl: './car-registration-tracker.component.css'
})
export class CarRegistrationTrackerComponent {
  private carRegistrationTrackerService= inject(CarRegistrationTrackerService)
  realTimeCarData = this.carRegistrationTrackerService.realTimeCarData;
  updatedCarData: Car[] = []; 

  constructor() {
    effect(() => {
      this.updatedCarData= this.realTimeCarData()
    });
  }
  
  ngOnInit() {
    this.carRegistrationTrackerService.createHubConnection();
  }

  ngOnDestroy() {
    this.carRegistrationTrackerService.stopHubConnection();
  }
}
