using System;
using System.Collections.Generic;
using System.Linq;

namespace Loops
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Before the loop");

            // Start the counter at 0
            //      |
            //      |        Keep going as long as counter is less than 10
            //      |               |
            //      |               |        Increment counter after each loop is done
            //      |               |             |
            //      |               |             |
            //      V               V             V
            for (var counter = 0; counter < 10; counter = counter + 1)
            {
                Console.WriteLine($"Doing something while counter is {counter}");
            }

            Console.WriteLine("We are done with the loop");


            var names = new List<string>() { "Mark", "Paula", "Sandy" };

            //   Start the index at 0
            //
            //                  Keep going as long as the index is less than the number of elements in our list
            //
            //                                         After each run of the loop below, add 1 to index
            //
            for (var index = 0; index < names.Count(); index++)
            {
                // Gets the "index"-th element of the list
                var currentName = names[index];

                // Print it.
                Console.WriteLine(currentName);
            }
        }
    }
}
