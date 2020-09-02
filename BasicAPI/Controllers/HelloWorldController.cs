using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    //[Route("api/HelloWorld")]
    [Route("api/[controller]")]
    [ApiController]
    public class HelloWorldController : ControllerBase
    {
        // This is where we code!
        [HttpGet]
        //                     query parameter named 'who'
        public string SayHello(string who)
        {
            // string whoOrWorld;

            // if (who == null)
            // {
            //     whoOrWorld = "World";
            // }
            // else
            // {
            //     whoOrWorld = who;
            // }

            // This one line is the same as the 9 above!
            var whoOrWorld = (who == null ? "World" : who);

            var currentTime = DateTime.Now;
            return $"Hello, {whoOrWorld}. It is currently {currentTime}";
        }
    }
}