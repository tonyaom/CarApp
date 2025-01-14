using API.DTOs;

namespace API.Interfaces;

public interface ICarRepository
{
    Task<IEnumerable<CarDto>> GetCarsAsync(string? make = null);
}