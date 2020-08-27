﻿using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace SuncoastMovies
{
    class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string PrimaryDirector { get; set; }
        public int YearReleased { get; set; }
        public string Genre { get; set; }

        // Define a property for our foreign key column named RatingId
        public int RatingId { get; set; }

        //
        //     Name of the class
        //     |
        //     |      Name of the property
        //     |      |
        public Rating Rating { get; set; }
    }

    class Rating
    {
        public int Id { get; set; }
        public string Description { get; set; }
    }

    // Define a database context for our Suncoast Movies database.
    // It derives from (has a parent of) DbContext so we get all the
    // abilities of a database context from EF Core.
    class SuncoastMoviesContext : DbContext
    {
        // Define a movies property that is a DbSet.
        public DbSet<Movie> Movies { get; set; }

        // Define a Ratings property that is a DbSet.
        // Relates the Rating *class* to the *Ratings* table
        public DbSet<Rating> Ratings { get; set; }

        // Define a method required by EF that will configure our connection
        // to the database.
        //
        // DbContextOptionsBuilder is provided to us. We then tell that object
        // we want to connect to a postgres database named suncoast_movies on
        // our local machine.
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());
            optionsBuilder.UseLoggerFactory(loggerFactory);

            optionsBuilder.UseNpgsql("server=localhost;database=SuncoastMovies");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Get a new context which will connect to the database
            var context = new SuncoastMoviesContext();

            // Get a reference to our collection of movies.
            // NOTE: this doesn't yet access any of them, just gives
            //       us a variable that knows how.
            //
            //                          While getting movies, also include...
            //                          |
            //                          |       for every movie
            //                          |       |
            //                          |       |        I want that movie's rating object
            var movies = context.Movies.Include(movie => movie.Rating);

            Console.WriteLine("About to use our ORM to count up the movies!");
            var movieCount = movies.Count();
            Console.WriteLine($"There are {movieCount} movies!");

            foreach (var movie in movies)
            {
                // If when we look at this movie, there is *NO* related Rating
                if (movie.Rating == null)
                {
                    // Print out a special message
                    Console.WriteLine($"There is a movie named {movie.Title} and has not been rated yet");
                }
                else
                {
                    // There is a related Rating, hooray!
                    var theMoviesRating = movie.Rating;

                    Console.WriteLine($"There is a movie named {movie.Title} and a rating of {theMoviesRating.Description}");
                }
            }
        }
    }
}
