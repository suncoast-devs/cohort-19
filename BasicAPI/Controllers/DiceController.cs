using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiceController : ControllerBase
    {
        // Inside the ()
        //
        // goes a string
        //
        // Inside the string is any ADDITIONAL parts of the url
        // past /api/Dice/ that we want. In this case we write
        // {sides} to say take whatever the user provides after the
        // last / and parse it as an `int` and place it in the variable sides
        [HttpGet("{sides}")]
        public List<int> Roll(int sides, int count = 1)
        {
            // Make a new list to store our integer rolls
            var rolls = new List<int>();

            // Make a random number generator
            var randomNumberGenerator = new Random();

            // Loop _count_ times
            for (var rollNumber = 0; rollNumber < count; rollNumber++)
            {
                // Grab a random roll between 1 and sides
                var roll = randomNumberGenerator.Next(sides) + 1;

                // Add that roll to the list
                rolls.Add(roll);
            }

            // Return the list
            return rolls;
        }
    }
}