using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using CsvHelper;

namespace NumberTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to Number Tracker");

            TextReader reader;

            if (File.Exists("numbers.csv"))
            {
                // If the file exists
                var fileName = "numbers.csv";
                reader = new StreamReader(fileName);
            }
            else
            {
                // The file does NOT exist
                // Read the data from an empty string instead
                var emptyInputDataString = "";
                reader = new StringReader(emptyInputDataString);
            }

            var csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);
            // Lets tell csvReader not to look at the first row as a header, but as data
            csvReader.Configuration.HasHeaderRecord = false;

            // Create a list of numbers by READING them from the CSV reader
            var numbers = csvReader.GetRecords<int>().ToList();

            reader.Close();


            // Creates a list of numbers we will be tracking
            // var numbers = new List<int>();

            // Controls if we are still running our loop asking for more numbers
            var isRunning = true;

            // While we are running  isRunning
            while (isRunning)
            {
                // Show the list of numbers
                Console.WriteLine("------------------");
                foreach (var number in numbers)
                {
                    Console.WriteLine(number);
                }
                Console.WriteLine($"Our list has: {numbers.Count()} entries");
                Console.WriteLine("------------------");

                // Ask for a new number or the word quit to end
                Console.Write("Enter a number to store, or 'quit' to end: ");
                var input = Console.ReadLine().ToLower();

                if (input == "quit")
                {
                    // If the input is quit, turn off the flag to keep looping
                    isRunning = false;
                }
                else
                {
                    // Parse the number and add it to the list of numbers
                    var number = int.Parse(input);
                    numbers.Add(number);
                }

                // If I put the code here it would write the list of numbers
                // after each one is input
            }

            // Code here to save the list of numbers to a file
            var fileWriter = new StreamWriter("numbers.csv");

            var csvWriter = new CsvWriter(fileWriter, CultureInfo.InvariantCulture);

            csvWriter.WriteRecords(numbers);

            fileWriter.Close();
        }
    }
}
