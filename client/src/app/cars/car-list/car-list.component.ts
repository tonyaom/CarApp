import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CarService } from '../../_services/car.service';
import { Car } from '../../_models/car';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
  private carService = inject(CarService);
  cars: Car[] = [];
  make: string = '';

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    console.log(this.make);

    this.carService.getCars(this.make).subscribe({
      next: cars => this.cars = cars
    })
  }  
}
