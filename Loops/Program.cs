using System;
using System.Collections.Generic;
using System.Linq;

namespace Loops
{
    class Program
    {
        static void Main(string[] args)
        {

            var counter = 0;

            while (counter < 10)
            {
                Console.WriteLine("Doing something");

                counter++;
            }



            Console.WriteLine("Before the loop");

            // Start the counter at 0
            //      |
            //      |                         Keep going as long as counter is less than 10
            //      |                                |
            //      |                                |                          Increment counter after each loop is done
            //      |                                |                               |
            //      |                                |                               |
            //      V                                V                               V
            for (var counterWithForLoop = 0; counterWithForLoop < 10; counterWithForLoop++)
            {
                Console.WriteLine($"Doing something while counter is {counterWithForLoop}");
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

            // We want to print the names in the list, but in reverse order
            for (var reverseIndex = names.Count() - 1; reverseIndex >= 0; reverseIndex--)
            {
                // Gets the "index"-th element of the list
                var currentName = names[reverseIndex];

                // Print it.
                Console.WriteLine(currentName);
            }
        }
    }
}
