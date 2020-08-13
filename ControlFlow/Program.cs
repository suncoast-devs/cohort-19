using System;

namespace ControlFlow
{
    class Program
    {
        static void Main(string[] args)
        {
            // Ask the user for their name
            Console.Write("What is your name? ");
            var name = Console.ReadLine();

            // As long as the variable called name does *NOT*
            // EXACTLY equal the string quit
            while (name != "quit")
            {
                // Greet the user!
                Console.WriteLine($"Hello {name}");

                var score = 12;

                if (name == "Gavin")
                {
                    // Only if the variable name contains exactly "Gavin"
                    Console.WriteLine("Yes! We are doing the if statement based on name!");
                }

                if (score > 50)
                {
                    Console.WriteLine("Yes! We are doing the if statement based on score!");
                }

                if (name == "Gavin" && score > 50)
                {
                    Console.WriteLine("Yes! We are doing the AND combined if statement for names and score");
                }

                if (name == "Gavin" || score > 50)
                {
                    Console.WriteLine("Yes! We are doing the OR combined if statement for names and score");
                }

                // Ask for their name again
                Console.Write("What is your name? ");
                name = Console.ReadLine();

                // Before restarting the loop
            }

            // This is where the code goes AFTER the while loop
            Console.WriteLine("We are done with the while loop!");
        }
    }
}
