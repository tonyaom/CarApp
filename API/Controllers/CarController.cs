using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CarController(ICarRepository carRepository) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CarDto>>> GetCars([FromQuery] string? make)
    {
        var cars = await carRepository.GetCarsAsync(make);
        return Ok(cars);
    }
}
