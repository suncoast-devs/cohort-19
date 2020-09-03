using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GameDatabaseAPI.Models;

namespace GameDatabaseAPI.Controllers
{
    // All of these routes will be at the base URL:     /api/Games
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case GamesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public GamesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Games
        //
        // Returns a list of all your Games
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames()
        {
            // Uses the database context in `_context` to request all of the Games, sort
            // them by row id and return them as a JSON array.
            return await _context.Games.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Games/5
        //
        // Fetches and returns a specific game by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetGame(int id)
        {
            // Find the game in the database using `FindAsync` to look it up by id
            var game = await _context.Games.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (game == null)
            {
                // Return a `404` response to the client indicating we could not find a game with this id
                return NotFound();
            }

            //  Return the game as a JSON object.
            return game;
        }

        // PUT: api/Games/5
        //
        // Update an individual game with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Game
        // variable named game. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Game POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != game.Id)
            {
                return BadRequest();
            }

            // Add a check to make sure we have enough players.
            if (game.MinimumPlayers < 2)
            {
                return BadRequest(new { Message = "You need at least 2 players!" });
            }

            // Tell the database to consider everything in game to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from game
            _context.Entry(game).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!GameExists(id))
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
            return Ok(game);
            //
            // return NoContent();
        }

        // POST: api/Games
        //
        // Creates a new game in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Game
        // variable named game. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Game POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {
            // Add a check to make sure we have enough players.
            if (game.MinimumPlayers < 2)
            {
                return BadRequest(new { Message = "You need at least 2 players!" });
            }

            // Indicate to the database context we want to add this new record
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetGame", new { id = game.Id }, game);
        }

        // DELETE: api/Games/5
        //
        // Deletes an individual game with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGame(int id)
        {
            // Find this game by looking for the specific id
            var game = await _context.Games.FindAsync(id);
            if (game == null)
            {
                // There wasn't a game with that id so return a `404` not found
                return NotFound();
            }

            if (game.When < DateTime.Now)
            {
                return BadRequest();
            }

            // Tell the database we want to remove this record
            _context.Games.Remove(game);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(game);
            //
            return NoContent();
        }

        //
        // Adding Players to a game
        //
        // POST /api/Games/5/Players
        [HttpPost("{id}/Players")]
        public async Task<ActionResult<Player>> CreatePlayerForGame(int id, Player player)
        //                                       |       |
        //                                       |       Player deserialized from JSON from the body
        //                                       |
        //                                       Game ID comes from the URL
        {
            // I have what I need
            //
            // I know which Game
            //
            // I know the new player details  

            // P: Given a game ID and a player, create a new player FOR THAT GAME
            // E: Game ID 1, Player name "Gavin"
            // E: Game ID 2, Player name "Jason"
            // D: id for Game (comes from the URL), and a Player object (comes from the body)
            // A:
            //     First, lets find the game (by using the ID)
            var game = await _context.Games.FindAsync(id);

            //     If the game doesn't exist: return a 404 Not found.
            if (game == null)
            {
                // Return a `404` response to the client indicating we could not find a game with this id
                return NotFound();
            }

            //     Associate the player to the given game.
            player.GameId = game.Id;

            // If the game already has the maximum number of 
            // players, don't allow any more.
            //
            // Leave as an exercise to the student.
            // Or maybe for review time....

            //     Add the player to the database
            _context.Players.Add(player);
            await _context.SaveChangesAsync();

            //     Return the new player to the response of the API
            return Ok(player);
        }




        // Private helper method that looks up an existing game by the supplied id
        private bool GameExists(int id)
        {
            return _context.Games.Any(game => game.Id == id);
        }
    }
}
