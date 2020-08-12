using System;
using System.Collections.Generic;
using System.Linq;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            // This is the long way of keeping track of multiple strings
            //
            // var name1 = "Gavin";
            // var name2 = "Jason";
            // var name3 = "Katherine";
            // var name4 = "Kento";
            // var name5 = "Jordan";

            //
            //          This means an ARRAY (collection) of strings
            //          |          |
            //          |          | This is the values in the array, five strings
            //          |          | |                                                  |
            //          v----------v V--------------------------------------------------v
            var names = new string[] { "Gavin", "Jason", "Katherine", "Kento", "Jordan" };


            var sentence = "The quick brown fox";
            var firstLetterOfString = sentence[0];

            // Booo, this doesn't print out all the names, it shows
            //
            // System.String[]
            //
            // which is totally unhelpful. Thanks C#!
            Console.WriteLine($"The names are {names}");


            var firstNameInTheArray = names[0];
            Console.WriteLine($"This first name in our array is: {firstNameInTheArray}");

            var secondNameInTheArray = names[1];
            Console.WriteLine($"This second name in our array is: {secondNameInTheArray}");

            var nameCount = names.Length;
            Console.WriteLine($"There are {nameCount} strings in our array!");


            // This makes a new array of integers!
            var scores = new int[] { 100, 42, 56, 98, 42, 1, 17 };

            var firstScoreInTheArray = scores[0];
            Console.WriteLine($"The first score in our array is {firstScoreInTheArray}");



            //                Making a new List
            //                |
            //                |    ... of strings
            //                |    |
            //                |    |          Start of initial list of strings
            //                |    |          |
            //                |    |          |       Values
            //                |    |          |       |
            //                |    |          |       |                 End of list
            //                |    |          |       |                           |
            //                |    |          |       |                           |
            //                v    |          v       v                           v
            var nameList = new List<string>() { "Mark", "Paula", "Sandy", "Bill" };

            var firstNameFromList = nameList[0];
            var secondNameFromList = nameList[1];

            var numberOfNamesInList = nameList.Count();
            Console.WriteLine($"There are {numberOfNamesInList} in our list");

            // Add George to our list, since List can add and remove, but arrays cannot
            //
            // Variable
            //  |
            //  |    Behavior
            //  |     |
            //  |     |    Input/data
            //  |     |     |
            //  v     v     v
            nameList.Add("George");

            numberOfNamesInList = nameList.Count();
            Console.WriteLine($"*NOW*! there are {numberOfNamesInList} in our list, including George");


































        }
    }
}
