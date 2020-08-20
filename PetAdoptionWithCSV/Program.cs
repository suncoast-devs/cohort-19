using System;
using System.Collections.Generic;
using System.Linq;

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

        // Name         Description
        // input        nothing
        // work         building a string that describes the pet
        // output       that string

        public string Description()
        {
            var description = $"{Name} is a {Species} that is {Age} years old and is {Color}, {Size}";

            return description;
        }
    }

    class Program
    {
        // name        PromptAndFindPet
        // input       list of pets
        // work        prompt for the name, search for the pet
        // output      the pet or null

        static Pet PromptAndFindPet(List<Pet> petsToSearchWithin)
        {
            Console.Write("Name: ");
            var nameOfPetToSearchFor = Console.ReadLine();

            // We need to find that pet by name from the list
            var foundPet = petsToSearchWithin.FirstOrDefault(pet => pet.Name == nameOfPetToSearchFor);

            return foundPet;
        }

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
                        Console.WriteLine(pet.Description());
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
                    var ageString = Console.ReadLine();
                    var age = int.Parse(ageString);

                    // Prompt for the species
                    Console.Write("Species: ");
                    var species = Console.ReadLine();

                    Console.Write("Gender: ");
                    var gender = Console.ReadLine();

                    // Prompt for the color
                    Console.Write("Color: ");
                    var color = Console.ReadLine();

                    // Prompt for the size
                    Console.Write("Size: ");
                    var size = Console.ReadLine();

                    // Make a new Pet
                    var pet = new Pet()
                    {
                        Name = name,
                        Species = species,
                        Gender = gender,
                        Color = color,
                        Size = size,
                        Age = age,
                    };

                    // Add it to the list
                    pets.Add(pet);
                }

                if (choice == "ADOPT")
                {
                    // PEDAC
                    //
                    // Algorithm
                    //
                    var foundPet = PromptAndFindPet(pets);

                    // If there is a pet with that name, then do the rest
                    if (foundPet != null)
                    {
                        //       Probably want to show the details of this pet to confirm
                        //      print the name, age, species, gender, color and size
                        Console.WriteLine(foundPet.Description());

                        //       Ask the user YES OR NO
                        Console.Write("Are you sure, YES or NO: ");
                        var answer = Console.ReadLine();

                        if (answer == "YES")
                        {
                            // If yes, remove the pet
                            pets.Remove(foundPet);
                        }
                    }
                    else
                    {
                        Console.WriteLine($"There is no pet found");
                    }
                    //
                    // done
                }

                if (choice == "UPDATE")
                {
                    // PEDAC
                    //
                    // Algorithm
                    //
                    // Prompt for the name of a pet
                    var foundPet = PromptAndFindPet(pets);

                    // If we a found a pet
                    if (foundPet != null)
                    {
                        // Prompt if this is the right pet
                        //       Probably want to show the details of this pet to confirm
                        //      print the name, age, species, gender, color and size
                        Console.WriteLine(foundPet.Description());

                        //       Ask the user YES OR NO
                        Console.Write("Are you sure, YES or NO: ");
                        var answer = Console.ReadLine();

                        if (answer == "YES")
                        {
                            //    Prompt for a new size
                            Console.Write("New size: ");
                            var newPetSize = Console.ReadLine();

                            //    Change that pet's size
                            foundPet.Size = newPetSize;
                        }
                    }

                }
            }

            Console.WriteLine("... goodbye ...");
        }
    }
}
