using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to my program");

            Console.WriteLine("\n\n\n\n\n\n\n\n");

            Console.Write("What is your name? ");
            var name = Console.ReadLine();

            Console.WriteLine($"It is a pleasure to meet you, {name}");
            Console.WriteLine($"Your name has {name.Length} characters in it!");

            var score = 98;
            Console.WriteLine($"Twice your score is {2 * score - 5}");
        }
    }
}
