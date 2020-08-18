using System;

namespace ClassesAgain
{
    class Cat
    {
        public Cat(string newCatName)
        {
            Name = newCatName;
        }

        public string Name { get; set; } = "Unknown Cat";
        public int Age { get; set; }
        public int HungerLevel { get; set; } = 3;

        public void Play()
        {
            HungerLevel += 3;
            // HungerLevel = HungerLevel + 3;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var kitty = new Cat("Fluffy")
            {
                Age = 3,
                HungerLevel = 5
            };

            var pickles = new Cat("Pickles");

            pickles.Play();
            kitty.Play();

            Console.WriteLine($"Our cat is named {kitty.Name}");
        }
    }
}
