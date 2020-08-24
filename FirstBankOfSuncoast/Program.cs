using System;

namespace FirstBankOfSuncoast
{
    class Program
    {
        static void Main(string[] args)
        {
            bool mainMenuInUse = true;

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
