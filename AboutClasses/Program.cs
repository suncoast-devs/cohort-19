using System;

namespace AboutMethods
{
    class Employee
    {
        public string Name { get; set; }
        public int Department { get; set; }
        public int Salary { get; set; }
        public int MonthlySalary { get; set; }
    }

    class Program
    {
        static void DisplayGreeting()
        {
            Console.WriteLine("Welcome to Our Employee Database");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
        }

        //     return type
        //
        //            method name
        //
        //                            argument type
        //
        //                                   argument name
        static string PromptForString(string prompt)
        {
            // First work to do is to print the prompt
            Console.Write(prompt);

            // Get the user input
            var userInput = Console.ReadLine();

            // The return keyword means whatever follows
            // is the OUTPUT of our method
            return userInput;
        }

        static int PromptForInteger(string prompt)
        {
            // First work to do is to print the prompt
            Console.Write(prompt);

            // Get the user input
            var userInput = Console.ReadLine();

            int userInputAsInteger;
            var isThisGoodInput = int.TryParse(userInput, out userInputAsInteger);

            if (isThisGoodInput == true)
            {
                return userInputAsInteger;
            }
            else
            {
                Console.WriteLine($"Sorry, {userInput} isn't a number. I'm going to use 0 instead.");

                return 0;
            }
        }

        static void Main(string[] args)
        {
            DisplayGreeting();

            // A boolean variable that determines if we
            // want to keep adding employees 
            var keepAddingEmployees = true;

            while (keepAddingEmployees == true)
            {
                // Console.Write("What is your name? ");
                // var name = Console.ReadLine();
                var name = PromptForString("What is your name? ");

                // Console.Write("What is your department number? ");
                // // Read in a string from the user
                // var departmentString = Console.ReadLine();
                // // But store the department number as an "int"
                // var department = int.Parse(departmentString);
                var department = PromptForInteger("What is your department number? ");

                // Console.Write("What is your yearly salary (in dollars)? ");
                // var salary = int.Parse(Console.ReadLine());
                var salary = PromptForInteger("What is your yearly salary (in dollars)? ");

                var salaryPerMonth = salary / 12;

                var ourEmployee = new Employee()
                {
                    Name = name,
                    Department = department,
                    Salary = salary,
                    MonthlySalary = salaryPerMonth
                };


                Console.WriteLine($"Hello, {ourEmployee.Name} you make {ourEmployee.MonthlySalary} a month.");

                var answer = PromptForString("Keep going? ");

                if (answer == "yes")
                {
                    keepAddingEmployees = true;
                }
                else
                {
                    keepAddingEmployees = false;
                }
            }
        }
    }
}
