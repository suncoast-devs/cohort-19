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
        // Make a method that can go through a list of transactions and just print the ones for
        // a specific account

        // name       DisplayTransactions
        // input      transactions and the specific account ("Checking" or "Savings")
        // work       loop from below
        // output     nothing
        static void DisplayTransactions(List<Transaction> transactions, string accountType)
        {
            var specificTransactions = transactions.Where(transaction => transaction.Account == accountType);

            // Go through all the transactions
            foreach (var transaction in specificTransactions)
            {
                Console.WriteLine($"A {transaction.Type} of {transaction.Amount}");
            }
        }

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
                        DisplayTransactions(transactions, "Savings");
                        break;

                    case "HC":
                        DisplayTransactions(transactions, "Checking");
                        break;

                    case "S":
                        // PEDAC
                        //
                        // Problem: Get and show the total balance for savings
                        //          Get and show the total balance for checking


                        // Algorithm
                        // First make a new list of all the checking transactions
                        var checkingWithdrawTransactions = transactions.Where(transaction => transaction.Account == "Checking" && transaction.Type == "Withdraw");
                        var checkingDepositTransactions = transactions.Where(transaction => transaction.Account == "Checking" && transaction.Type == "Deposit");

                        // Sum the amounts of those transactions
                        var sumOfCheckingWithdrawAmounts = checkingWithdrawTransactions.Sum(transaction => transaction.Amount);
                        var sumOfCheckingDepositAmounts = checkingDepositTransactions.Sum(transaction => transaction.Amount);
                        Console.WriteLine($"The balance in your checking is {sumOfCheckingDepositAmounts - sumOfCheckingWithdrawAmounts}");

                        var savingsWithdrawTransactions = transactions.Where(transaction => transaction.Account == "Savings" && transaction.Type == "Withdraw");
                        var savingsDepositTransactions = transactions.Where(transaction => transaction.Account == "Savings" && transaction.Type == "Deposit");

                        var sumOfSavingsWithdrawAmounts = savingsWithdrawTransactions.Sum(transaction => transaction.Amount);
                        var sumOfSavingsDepositAmounts = savingsDepositTransactions.Sum(transaction => transaction.Amount);
                        Console.WriteLine($"The balance in your savings is {sumOfSavingsDepositAmounts - sumOfSavingsWithdrawAmounts}");

                        break;

                    default:
                        Console.WriteLine($"{choice} - is not a valid option");
                        break;
                }
            }
        }
    }
}
