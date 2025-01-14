using System;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR;

public class CarHub(ICarRepository carRepository): Hub
{
  public override async Task OnConnectedAsync()
  { 
    var cars = await carRepository.GetCarsAsync();
    await Clients.All.SendAsync("CarRegistrationTracker", cars);
  }
  
  public override async Task OnDisconnectedAsync(Exception? exception)
  {
      await base.OnDisconnectedAsync(exception);
  }
}
