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
        public string SayHello()
        {
            return "Hello, World. This is our first API!";
        }
    }
}