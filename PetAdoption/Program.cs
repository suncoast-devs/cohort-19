using System;
using System.Collections.Generic;

namespace PetAdoption
{
    class Pet
    {
        // - Name - string
        public string Name { get; set; }
        // - Age - int
        public int Age { get; set; }
        // - Species (Cat, Dog, Bird) - string
        public string Species { get; set; }
        // - Gender - string
        public string Gender { get; set; }
        // - Color - string
        public string Color { get; set; }
        // - Size - string
        public string Size { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var scores = new List<int>() { 42, 100, 12, 44, 55 };

            var pets = new List<Pet>() {
              // | Species | Gender | Age | Name    | Color  | Size   |
              // | ------- | ------ | --- | ------- | ------ | ------ |
              // | Dog     | Female | 1   | Sadie   | Blonde | Medium |
              // | Cat     | Male   | 3   | Russell | Black  | Small  |
              // | Dog     | Male   | 3   | Kodak   | White  | Large  |
              new Pet {
                Name = "Sadie",
                Species = "Dog",
                Gender = "Female",
                Age = 1,
                Color = "Blonde",
                Size = "Medium",
              },

              new Pet {
                Name = "Russell",
                Species = "Cat",
                Gender = "Male",
                Age = 3,
                Color = "Black",
                Size = "Small",
              },

              new Pet {
                Name = "Kodak",
                Species = "Dog",
                Gender = "Male",
                Age = 3,
                Color = "White",
                Size = "Large",
              },
            };

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

                if (choice == "SEE")
                {
                    // Show a list of all the pets
                    // PEDAC
                    // Problem: Have a list of pets, print each pet out in a nice way.
                    // Example: Same as main program
                    // Data: Same
                    // Algorithm:
                    //    for each pet in our list
                    foreach (var pet in pets)
                    {
                        //      print the name, age, species, gender, color and size
                        Console.WriteLine($"{pet.Name} is a {pet.Species} that is {pet.Age} years old and is {pet.Color}, {pet.Size}");
                    }
                }

                if (choice == "ADD")
                {
                    // PEDAC
                    //
                    // Algorithm:
                    //
                    // Prompt for the name
                    Console.Write("Name: ");
                    var name = Console.ReadLine();

                    // Prompt for the age
                    Console.Write("Age: ");
                    var age = Console.ReadLine();

                    // Prompt for the species
                    Console.Write("Species: ");
                    var species = Console.ReadLine();

                    // Prompt for the color
                    Console.Write("Color: ");
                    var color = Console.ReadLine();

                    // Prompt for the size
                    Console.Write("Size: ");
                    var size = Console.ReadLine();

                    //
                    // Make a new Pet
                    // Add it to the list
                }
            }

            Console.WriteLine("... goodbye ...");
        }
    }
}
