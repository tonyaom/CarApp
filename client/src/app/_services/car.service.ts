import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Car } from '../_models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  getCars(make:string) {
    return this.http.get<Car[]>(this.baseUrl + 'cars?make=' + make);
  }
}
