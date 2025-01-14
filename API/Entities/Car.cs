namespace API.Entities;
using Newtonsoft.Json;
using System;

public class Car
{
    public Guid Id { get; set; }
    public required string Make { get; set; }
    public required string Model { get; set; }
    public int Year { get; set; }
    public required string Color { get; set; }
    public decimal PurchasePrice { get; set; }
    public required string LicensePlateNumber { get; set; }
    public DateOnly RegistrationExpiredDate { get; set; }
}