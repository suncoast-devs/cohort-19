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

        static int Balance(List<Transaction> transactions, string accountType)
        {
            var withdrawTransactions = transactions.Where(transaction => transaction.Account == accountType && transaction.Type == "Withdraw");
            var depositTransactions = transactions.Where(transaction => transaction.Account == accountType && transaction.Type == "Deposit");

            // Sum the amounts of those transactions
            var sumOfWithdrawAmounts = withdrawTransactions.Sum(transaction => transaction.Amount);
            var sumOfDepositAmounts = depositTransactions.Sum(transaction => transaction.Amount);

            return sumOfDepositAmounts - sumOfWithdrawAmounts;
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
                        Console.Write("How much do you want to withdraw: ");
                        // var withdrawSavingsString = Console.ReadLine();
                        // var withdrawSavingsAmount = intParse(withdrawSavingsString);
                        var withdrawSavingsAmount = int.Parse(Console.ReadLine());
                        if (withdrawSavingsAmount < 0)
                        {
                            Console.WriteLine("Sorry, you must supply a positive number");
                        }
                        else
                        {
                            // If we are withdrawing more than what is in our savings, also an error
                            var balanceInSavings = Balance(transactions, "Savings");
                            if (withdrawSavingsAmount > balanceInSavings)
                            {
                                Console.WriteLine("Insufficient funds");
                            }
                            else
                            {
                                var newTransaction = new Transaction()
                                {
                                    Type = "Withdraw",
                                    Account = "Savings",
                                    Amount = withdrawSavingsAmount
                                };

                                transactions.Add(newTransaction);
                            }
                        }

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

                        var checkingBalance = Balance(transactions, "Checking");
                        var savingsBalance = Balance(transactions, "Savings");
                        Console.WriteLine($"The balance in your savings is {savingsBalance}");
                        Console.WriteLine($"The balance in your checking is {checkingBalance}");
                        break;

                    default:
                        Console.WriteLine($"{choice} - is not a valid option");
                        break;
                }
            }
        }
    }
}
