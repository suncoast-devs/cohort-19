﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace LINQ
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tagline { get; set; }
        public DateTime ReleasedDate { get; set; }
        public int Screenings { get; set; }
        public double PricePerTicket { get; set; }
        public double TotalRevenue { get; set; }
        public double Cost { get; set; }
        public double Budget { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var scores = new List<int> { 42, 100, 98, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };

            var newScores = scores.Select(score => score * 2);
            var slightlyBetterScores = scores.Select(score => score + 1);

            // // Make a new list to store the results
            // var newScores = new List<int>();

            // // Go through each score in the scores list
            // foreach (var score in scores)
            // {
            //     // Use the `MultiplyBy2` expression to take score and double it
            //     var doubled = MultiplyBy2(score);

            //     // Add it to our new list
            //     newScores.Add(doubled);
            // }


            var movies = new List<Movie>()
            {
                new Movie()
                {
                    Id = 1,
                    Name = "Dorm Daze (National Lampoon Presents Dorm Daze)",
                    Tagline = "Multi-tiered modular standardization",
                    ReleasedDate = DateTime.Parse("3/27/2019"),
                    Screenings = 186,
                    PricePerTicket = 11,
                    TotalRevenue = 13361359,
                    Cost = 18274829,
                    Budget = 8210089
                },

                new Movie()
                {
                    Id = 2,
                    Name = "Born Yesterday",
                    Tagline = "Managed empowering open system",
                    ReleasedDate = DateTime.Parse("2/12/2014"),
                    Screenings = 184,
                    PricePerTicket = 11,
                    TotalRevenue = 6563796,
                    Cost = 9021912,
                    Budget = 11364786
                },

                new Movie()
                {
                    Id = 3,
                    Name = "Darjeeling Limited, The",
                    Tagline = "Quality-focused actuating initiative",
                    ReleasedDate = DateTime.Parse("8/21/2013"),
                    Screenings = 177,
                    PricePerTicket = 10,
                    TotalRevenue = 17851792,
                    Cost = 5441889,
                    Budget = 12144397
                },

                new Movie()
                {
                    Id = 4,
                    Name = "Offside",
                    Tagline = "Enhanced homogeneous migration",
                    ReleasedDate = DateTime.Parse("4/18/2019"),
                    Screenings = 169,
                    PricePerTicket = 11,
                    TotalRevenue = 1445952,
                    Cost = 4008467,
                    Budget = 7417825
                },

                new Movie()
                {
                    Id = 5,
                    Name = "Superman vs. The Elite",
                    Tagline = "Stand-alone systematic model",
                    ReleasedDate = DateTime.Parse("12/7/2016"),
                    Screenings = 124,
                    PricePerTicket = 19,
                    TotalRevenue = 13737676,
                    Cost = 18893333,
                    Budget = 6585110
                },

                new Movie()
                {
                    Id = 6,
                    Name = "Body Snatchers",
                    Tagline = "Diverse holistic data-warehouse",
                    ReleasedDate = DateTime.Parse("1/12/2007"),
                    Screenings = 170,
                    PricePerTicket = 10,
                    TotalRevenue = 10540575,
                    Cost = 12946787,
                    Budget = 9237906
                },

                new Movie()
                {
                    Id = 7,
                    Name = "Death and Cremation",
                    Tagline = "Ergonomic local knowledge base",
                    ReleasedDate = DateTime.Parse("4/1/2013"),
                    Screenings = 138,
                    PricePerTicket = 10,
                    TotalRevenue = 12361644,
                    Cost = 7326663,
                    Budget = 16829534
                },

                new Movie()
                {
                    Id = 8,
                    Name = "Other End of the Line, The",
                    Tagline = "Up-sized demand-driven policy",
                    ReleasedDate = DateTime.Parse("11/15/2016"),
                    Screenings = 169,
                    PricePerTicket = 12,
                    TotalRevenue = 6371172,
                    Cost = 17279838,
                    Budget = 14274676
                },

                new Movie()
                {
                    Id = 9,
                    Name = "Our Mother's House",
                    Tagline = "Enhanced methodical algorithm",
                    ReleasedDate = DateTime.Parse("7/20/2018"),
                    Screenings = 188,
                    PricePerTicket = 17,
                    TotalRevenue = 3544170,
                    Cost = 7953388,
                    Budget = 19636220
                },

                new Movie()
                {
                    Id = 10,
                    Name = "Everything I Can See From Here",
                    Tagline = "Synchronised 24/7 utilisation",
                    ReleasedDate = DateTime.Parse("7/26/2012"),
                    Screenings = 84,
                    PricePerTicket = 4,
                    TotalRevenue = 14520267,
                    Cost = 2766779,
                    Budget = 2478292
                },

                new Movie()
                {
                    Id = 11,
                    Name = "My Rainy Days",
                    Tagline = "Cloned static array",
                    ReleasedDate = DateTime.Parse("8/4/2015"),
                    Screenings = 104,
                    PricePerTicket = 15,
                    TotalRevenue = 6860536,
                    Cost = 6622076,
                    Budget = 1091525
                },

                new Movie()
                {
                    Id = 12,
                    Name = "Five Graves to Cairo",
                    Tagline = "Ergonomic heuristic capacity",
                    ReleasedDate = DateTime.Parse("10/25/2013"),
                    Screenings = 65,
                    PricePerTicket = 17,
                    TotalRevenue = 13595001,
                    Cost = 3736299,
                    Budget = 724740
                },

                new Movie()
                {
                    Id = 13,
                    Name = "Hunted, The",
                    Tagline = "Multi-channelled object-oriented groupware",
                    ReleasedDate = DateTime.Parse("2/4/2014"),
                    Screenings = 185,
                    PricePerTicket = 7,
                    TotalRevenue = 13273082,
                    Cost = 14879296,
                    Budget = 7461416
                },

                new Movie()
                {
                    Id = 14,
                    Name = "Charlie Chan's Courage",
                    Tagline = "Implemented interactive installation",
                    ReleasedDate = DateTime.Parse("5/25/2006"),
                    Screenings = 50,
                    PricePerTicket = 10,
                    TotalRevenue = 15695655,
                    Cost = 11372062,
                    Budget = 9089553
                },

                new Movie()
                {
                    Id = 15,
                    Name = "When Will I Be Loved",
                    Tagline = "Networked uniform toolset",
                    ReleasedDate = DateTime.Parse("8/25/2015"),
                    Screenings = 165,
                    PricePerTicket = 21,
                    TotalRevenue = 10095292,
                    Cost = 16020659,
                    Budget = 15707348
                },

                new Movie()
                {
                    Id = 16,
                    Name = "Viva Las Vegas",
                    Tagline = "Digitized dedicated capability",
                    ReleasedDate = DateTime.Parse("7/4/2015"),
                    Screenings = 85,
                    PricePerTicket = 16,
                    TotalRevenue = 16406383,
                    Cost = 9854228,
                    Budget = 16042287
                },

                new Movie()
                {
                    Id = 17,
                    Name = "Topaze",
                    Tagline = "Advanced high-level benchmark",
                    ReleasedDate = DateTime.Parse("12/1/2010"),
                    Screenings = 60,
                    PricePerTicket = 4,
                    TotalRevenue = 13809680,
                    Cost = 12667720,
                    Budget = 14805773
                },

                new Movie()
                {
                    Id = 18,
                    Name = "The Clinic",
                    Tagline = "Polarised regional solution",
                    ReleasedDate = DateTime.Parse("4/20/2013"),
                    Screenings = 128,
                    PricePerTicket = 8,
                    TotalRevenue = 17416537,
                    Cost = 3435812,
                    Budget = 8818065
                },

                new Movie()
                {
                    Id = 19,
                    Name = "The Land Before Time X: The Great Longneck Migration",
                    Tagline = "Adaptive dedicated workforce",
                    ReleasedDate = DateTime.Parse("10/10/2008"),
                    Screenings = 170,
                    PricePerTicket = 21,
                    TotalRevenue = 5720197,
                    Cost = 10514309,
                    Budget = 3781872
                },

                new Movie()
                {
                    Id = 20,
                    Name = "Tarzan",
                    Tagline = "Polarised intangible productivity",
                    ReleasedDate = DateTime.Parse("12/31/2006"),
                    Screenings = 105,
                    PricePerTicket = 19,
                    TotalRevenue = 6338974,
                    Cost = 18402771,
                    Budget = 844331
                },

                new Movie()
                {
                    Id = 21,
                    Name = "Jaws",
                    Tagline = "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down. ",
                    ReleasedDate = DateTime.Parse("1/1/1975"),
                    Screenings = 105,
                    PricePerTicket = 7,
                    TotalRevenue = 6338974,
                    Cost = 18402771,
                    Budget = 844331
                },
            };

            var movieNames = movies.Select(movie => movie.Name);
            var movieScreenings = movies.Select(movie => movie.Screenings);

            var popularMovies = movies.Where(movie => movie.Screenings >= 100);

            //  List
            //  |
            //  |            LINQ method
            //  |                    |
            //  |                    |          Stariting value for currentTotal
            //  |                    |          |
            var totalRevenue = movies.Aggregate(0.0,

            // Expression to do for each element of movies
            //
            // currentValue
            // |
            // |           current Element of the list
            // |           |
            // |           |         Transformation to get the NEXT value for currentTotal
            // |           |         |
            (currentTotal, movie) => currentTotal + movie.TotalRevenue);

            // List of all the revenues from each movie!
            var allRevenues = movies.Select(movie => movie.TotalRevenue);
            var totalRevenueSum = allRevenues.Sum();

            var areAllOldMovies = movies.All(movie => movie.ReleasedDate.Year < 1965);

            var areAnyOldMovies = movies.Any(movie => movie.ReleasedDate.Year < 1990);

            // Count the movies older than 1990 in two steps
            var eightiesMovies = movies.Where(movie => movie.ReleasedDate.Year < 1990);
            var howManyEightiesMovie = eightiesMovies.Count();

            // Like the above, but in one step and we don't keep the list around, just the resulting count
            var howManyEightiesMoviesOneStep = movies.Where(movie => movie.ReleasedDate.Year < 1990).Count();

            var howManyEightesMoviesOneStepSimpler = movies.Count(movie => movie.ReleasedDate.Year < 1990);

            var jawsMovie = movies.FirstOrDefault(movie => movie.Name == "Jaws");

            var nullMovie = movies.FirstOrDefault(movie => movie.Name == "Not a Movie");
        }
    }
}
