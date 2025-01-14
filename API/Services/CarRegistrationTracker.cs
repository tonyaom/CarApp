using API.Interfaces;
using Microsoft.AspNetCore.SignalR;
using API.SignalR;
using Newtonsoft.Json;
using System.Security.Cryptography;
using System.Text;

public class CarRegistrationTracker(IServiceProvider serviceProvider, IHubContext<CarHub> hubContext) : BackgroundService
{
    private readonly TimeSpan _interval = TimeSpan.FromSeconds(5);

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {   
        string previousHash = string.Empty;
        while (!stoppingToken.IsCancellationRequested)
        {
            using (var scope = serviceProvider.CreateScope())
            {
                var carRepository = scope.ServiceProvider.GetRequiredService<ICarRepository>();
                var cars = await carRepository.GetCarsAsync();
                string carsString = JsonConvert.SerializeObject(cars);

                using MD5 md5 = MD5.Create();
                byte[] hashBytes = md5.ComputeHash(Encoding.UTF8.GetBytes(carsString));
                string currentHash = BitConverter.ToString(hashBytes).Replace("-", "").ToLower();

                if (currentHash != previousHash)
                {
                    await hubContext.Clients.All.SendAsync("CarRegistrationTracker", cars);
                    Console.WriteLine("Updated data sent!");
                    previousHash = currentHash;
                }
                else
                {
                    Console.WriteLine("No data update.");
                }
            }

            await Task.Delay(_interval, stoppingToken);
        }
    }
}
