using System;
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
    }

    // Define a database context for our Suncoast Movies database.
    // It derives from (has a parent of) DbContext so we get all the
    // abilities of a database context from EF Core.
    class SuncoastMoviesContext : DbContext
    {
        // Define a movies property that is a DbSet.
        public DbSet<Movie> Movies { get; set; }

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
            var movies = context.Movies;

            Console.WriteLine("About to use our ORM to count up the movies!");
            var movieCount = movies.Count();
            Console.WriteLine($"There are {movieCount} movies!");

            foreach (var movie in movies)
            {
                Console.WriteLine($"There is a movie named {movie.Title}");
            }
        }
    }
}
