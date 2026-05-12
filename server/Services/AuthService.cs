using BCrypt.Net;
using server.Data;
using server.DTOs.Auth;
using server.Interfaces;
using server.Models;

namespace server.Services;

public class AuthService : IAuthService
{
    private readonly ApplicationDbContext _context;

    public AuthService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<RegisterResponseDto> RegisterAsync(RegisterRequestDto request)
    {
        var existingUser = _context.Users.FirstOrDefault(
            user => user.Email == request.Email
        );

        if (existingUser is not null)
        {
            throw new Exception("User already exists.");
        }

        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(request.Password);

        var user = new User
        {
            Name = request.Name,
            Email = request.Email,
            PasswordHash = hashedPassword
        };

        _context.Users.Add(user);

        await _context.SaveChangesAsync();

        return new RegisterResponseDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email
        };
    }
}