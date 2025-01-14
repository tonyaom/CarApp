using API.Data;
using API.Interfaces;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services,
      ConfigurationManager configuration)
    {
        services.AddControllers();        
        services.AddCors();
        services.AddScoped<ICarRepository, CarRepository>();
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.AddSignalR();
        services.AddHostedService<CarRegistrationTracker>();
        return services;
    }
}
