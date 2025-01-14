using System;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Car, CarDto>()
            .ForMember(dest => dest.RegistrationExpiryStatus, opt => opt.MapFrom(src =>
                src.RegistrationExpiredDate.ToDateTime(new TimeOnly(0, 0)) < DateTime.Now.Date ? "Expired" : "Valid"));

    }
}
