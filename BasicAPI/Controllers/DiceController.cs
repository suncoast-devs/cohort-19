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
        public int Roll(int sides)
        {
            // Make a random number generator
            var randomNumberGenerator = new Random();

            // Next(sides) would make a number between 0 and just less than sides
            // so return that number plus one. Making the range from 1 to a number
            // INCLUDING the value of sides.
            var roll = randomNumberGenerator.Next(sides) + 1;

            return roll;
        }
    }
}