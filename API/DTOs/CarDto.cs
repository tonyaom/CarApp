using System;

namespace API.DTOs;

public class CarDto
{
  public Guid Id { get; set; }
  public required string Make { get; set; }
  public required string Model { get; set; }
  public int Year { get; set; }
  public required string Color { get; set; }
  // Do not expose the PurchasePrice property to the client
  public required string LicensePlateNumber { get; set; }
  public DateOnly RegistrationExpiredDate { get; set; }
  public required string RegistrationExpiryStatus { get; set; }
}
