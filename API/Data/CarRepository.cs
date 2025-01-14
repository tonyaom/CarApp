using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Newtonsoft.Json;

namespace API.Data;

public class CarRepository(IMapper mapper) : ICarRepository
{
    public async Task<IEnumerable<CarDto>> GetCarsAsync(string? make = null)
    {
      var carData = await File.ReadAllTextAsync("Data/car_data.json");
      var cars = JsonConvert.DeserializeObject<List<Car>>(carData);
        
      if (cars != null && make != null)
      {
        cars = [.. cars.Where(car => car.Make.Equals(make, StringComparison.OrdinalIgnoreCase))];
      }
                
      return mapper.Map<IEnumerable<CarDto>>(cars);
    }
}
