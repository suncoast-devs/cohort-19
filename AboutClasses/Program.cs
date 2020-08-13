using System;
using System.Collections.Generic;
using System.Linq;

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

            // Our collection (list) of all the employees.
            // Each employee (object) knows its own Name
            // and Department, and Salary, and MonthlySalary
            var employees = new List<Employee>();

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

                // Similar to list of strings, we can add
                // an employee to a List<Employee>
                // names.Add("George");
                employees.Add(ourEmployee);

                // And we can count our employees
                var employeeCount = employees.Count();

                // Figure out the total salaries of all employees I currently know about
                //
                // Start a totalSalary at 0
                var totalSalary = 0;
                // For each employee we know about do the following
                foreach (var employee in employees)
                {
                    // - Get their salary
                    // - Add it to the totalSalary
                    totalSalary = totalSalary + employee.Salary;
                }
                // When done, totalSalary will be the answer

                var answer = PromptForString($"You have {employeeCount} employees with a total salary of {totalSalary}. Keep going? ");

                // if (answer == "yes")
                // {
                //     keepAddingEmployees = true;
                // }
                // else
                // {
                //     keepAddingEmployees = false;
                // }
                // This is the same as the 7 lines above    
                keepAddingEmployees = (answer == "yes");
            }
        }
    }
}
