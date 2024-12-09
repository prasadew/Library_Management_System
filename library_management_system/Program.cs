using library_management_system.Data; // Ensure your DbContext is imported
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the DbContext and configure SQLite
builder.Services.AddDbContext<LibraryDbContext>(options =>
{
    // Use the connection string from the appsettings.json
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()  // Allows requests from any origin
               .AllowAnyMethod()  // Allows all HTTP methods
               .AllowAnyHeader(); // Allows all headers
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use CORS
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
