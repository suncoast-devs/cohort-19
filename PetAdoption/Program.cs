using System;

namespace PetAdoption
{
    class Program
    {
        static void Main(string[] args)
        {
            // Welcome the user to the application
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Welcome to our Pet Adoption Agency");
            Console.WriteLine();
            Console.WriteLine();

            // While the user hasn't quit the application
            var hasQuitTheApplication = false;
            while (hasQuitTheApplication == false)
            {
                // Show them a menu of options they can do
                // - Add a new pet
                // - See all the pets up for adoption
                // - Input a name of a pet that has been adopted to remove them from the list
                // - Input a name of a pet and update their size
                // - Quit the application
                Console.WriteLine("What do you want to do?");
                Console.WriteLine(" ADD - Add a new pet");
                Console.WriteLine(" SEE - See all the pets up for adoption");
                Console.WriteLine(" ADOPT - Adopt out a pet");
                Console.WriteLine(" UPDATE - Update a pet's size");
                Console.WriteLine(" QUIT - Quit the program");
                Console.WriteLine();
                Console.Write("Choice: ");
                var choice = Console.ReadLine();

                // Implement quit
                // if the user typed in QUIT, then set hasQuitTheApplication to true
                if (choice == "QUIT")
                {
                    hasQuitTheApplication = true;
                }
            }

            Console.WriteLine("... goodbye ...");
        }
    }
}
