using System;
using System.Collections.Generic;
using System.Linq;

namespace FirstBankOfSuncoast
{
    class Transaction
    {
        public string Account { get; set; } // Checking or Savings
        public string Type { get; set; } // Deposit or Withdraw
        public int Amount { get; set; }  // Dollar amount of the transaction
    }

    class Program
    {
        static void Main(string[] args)
        {
            var transactions = new List<Transaction>()
            {
                // if a user deposits 10 to their savings,
                new Transaction()
                {
                    Amount = 10,
                    Type = "Deposit",
                    Account = "Savings"
                },
                 // then withdraws 8 from their savings,
                new Transaction()
                {
                    Amount = 8,
                    Type = "Withdraw",
                    Account = "Savings"
                },
                  // then deposits 25 to their checking,
                new Transaction()
                {
                    Amount = 25,
                    Type = "Deposit",
                    Account = "Checking"
                }
            };

            var mainMenuInUse = true;

            while (mainMenuInUse)
            {
                Console.WriteLine("DS - Deposit Savings");
                Console.WriteLine("DC - Deposit Checking");
                Console.WriteLine("WS - Withdraw Savings");
                Console.WriteLine("WC - Withdraw Checking");
                Console.WriteLine("T - Transfer");
                Console.WriteLine("HS - Show History of Savings Transactions");
                Console.WriteLine("HC - Show History of Checking Transactions");
                Console.WriteLine("S - Show balance");
                Console.WriteLine("X - Exit");
                Console.Write("Choice? ");
                var choice = Console.ReadLine();

                switch (choice.ToUpper())
                {
                    case "X":
                        mainMenuInUse = false;
                        break;

                    case "DS":
                        break;

                    case "DC":
                        break;

                    case "WS":
                        break;

                    case "WC":
                        break;

                    case "T":
                        break;

                    case "HS":
                        // PEDAC
                        //
                        // Algorithm
                        // Get a list of JUST the savings transactions
                        // Go through that new list
                        // {
                        //    show it
                        // }

                        // Get a list of JUST the savings transactions
                        var savingsTransactions = transactions.Where(transaction => transaction.Account == "Savings");

                        // Go through all the transactions
                        foreach (var transaction in savingsTransactions)
                        {
                            Console.WriteLine($"A {transaction.Type} of {transaction.Amount}");
                        }
                        break;

                    case "HC":
                        break;

                    case "S":
                        break;

                    default:
                        Console.WriteLine($"{choice} - is not a valid option");
                        break;
                }
            }
        }
    }
}
