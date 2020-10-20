using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TacoTuesday.Models;

namespace TacoTuesday.Controllers
{
    // All of these routes will be at the base URL:     /api/Users
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case UsersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public UsersController(DatabaseContext context)
        {
            _context = context;
        }

        // PUT: api/Users/5
        //
        // Update an individual User with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a User
        // variable named User. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our User POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PutUser(int id, User User)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != User.Id)
            {
                return BadRequest();
            }

            // If the ID of the editing user is NOT the current user's ID, reject this update
            if (id != GetCurrentUserId())
            {
                return BadRequest();
            }

            // Tell the database to consider everything in User to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from User
            _context.Entry(User).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!UserExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            return Ok(User);
        }

        // POST: api/Users
        //
        // Creates a new user in the database.
        //
        // The `body` of the request is parsed and then made available to us as a User
        // variable named user. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our User POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            try
            {
                // Indicate to the database context we want to add this new record
                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // Return a response that indicates the object was created (status code `201`) and some additional
                // headers with details of the newly created object.
                return CreatedAtAction("GetUser", new { id = user.Id }, user);
            }
            catch (Microsoft.EntityFrameworkCore.DbUpdateException)
            {
                // Do this code if there was an exception

                // Make a custom error response
                var response = new
                {
                    status = 400,
                    errors = new List<string>() { "This account already exists!" }
                };

                // Return our error with the custom response
                return BadRequest(response);
            }
        }

        // Private helper method that looks up an existing User by the supplied id
        private bool UserExists(int id)
        {
            return _context.Users.Any(User => User.Id == id);
        }


        // Private helper method to get the JWT claim related to the user ID
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}
