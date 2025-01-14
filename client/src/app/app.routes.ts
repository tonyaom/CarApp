import { Routes } from '@angular/router';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarRegistrationTrackerComponent } from './car-registration-tracker/car-registration-tracker.component';

export const routes: Routes = [
  {path: '', component: CarListComponent},
  {path: 'car-registration-tracker', component: CarRegistrationTrackerComponent},
];
