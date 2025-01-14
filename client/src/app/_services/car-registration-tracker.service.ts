import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Car } from '../_models/car';

@Injectable({
  providedIn: 'root'
})
export class CarRegistrationTrackerService {
  hubUrl = environment.hubsUrl;
  private hubConnection?: HubConnection;
  private toastr = inject(ToastrService);

  realTimeCarData = signal<Car[]>([]);

  createHubConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + 'cars')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .catch((error) => this.toastr.error(error));

    this.hubConnection.on('CarRegistrationTracker', (data) => {
      this.toastr.info("Car registration status updated.");
      this.realTimeCarData.set(data);
    });
  }

  stopHubConnection() {
    if (this.hubConnection?.state === HubConnectionState.Connected) {
      this.hubConnection
        .stop()
        .catch((error) => this.toastr.error(error));
    }
  }
}
