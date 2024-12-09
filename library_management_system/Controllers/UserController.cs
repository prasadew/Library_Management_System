using library_management_system.Data;
using library_management_system.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace library_management_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly LibraryDbContext appDbContext;

        public UserController(LibraryDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        // Register a new user
        [HttpPost("register")]
        public async Task<ActionResult<string>> Register([FromBody] User newUser)
        {
            // Check if email already exists
            var existingUser = await appDbContext.Users.FirstOrDefaultAsync(u => u.Email == newUser.Email);
            if (existingUser != null)
            {
                return BadRequest("Email already registered.");
            }

            // Hash the password
            newUser.PasswordHash = BCrypt.Net.BCrypt.HashPassword(newUser.PasswordHash);

            appDbContext.Users.Add(newUser);
            await appDbContext.SaveChangesAsync();
            return Ok("User registered successfully.");
        }

        // Login endpoint
        [HttpPost("login")]
        public async Task<ActionResult<string>> Login([FromBody] User loginUser)
        {
            var user = await appDbContext.Users.FirstOrDefaultAsync(u => u.Email == loginUser.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginUser.PasswordHash, user.PasswordHash))
            {
                return Unauthorized("Invalid email or password.");
            }

            // Generate a JWT token (or return user data if JWT is not used)
            return Ok($"Welcome {user.Name}, login successful!");
        }

        // Get all users
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var users = await appDbContext.Users.ToListAsync();
            return Ok(users);
        }

        // Get a user by ID
        [HttpGet("{id:int}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await appDbContext.Users.FirstOrDefaultAsync(e => e.Id == id);
            if (user != null)
            {
                return Ok(user);
            }
            return NotFound("User is not available");
        }

        // Update a user
        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(User updatedUser)
        {
            if (updatedUser != null)
            {
                var user = await appDbContext.Users.FirstOrDefaultAsync(e => e.Id == updatedUser.Id);
                if (user != null)
                {
                    user.Name = updatedUser.Name;
                    user.Role = updatedUser.Role;
                    await appDbContext.SaveChangesAsync();
                    return Ok();
                }
            }
            return BadRequest("User not found");
        }

        // Delete a user
        [HttpDelete]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var user = await appDbContext.Users.FirstOrDefaultAsync(e => e.Id == id);
            if (user != null)
            {
                appDbContext.Users.Remove(user);
                await appDbContext.SaveChangesAsync();
                return Ok(await appDbContext.Users.ToListAsync());
            }
            return NotFound();
        }
    }
}
