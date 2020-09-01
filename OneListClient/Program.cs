using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;

namespace OneListClient
{
    class Item
    {
        public int id { get; set; }
        public string text { get; set; }
        public bool complete { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }

        public string CompletedStatus
        {
            // Build a custom GET to access this data
            get
            {
                // Ternary
                // condition ? VALUE WHEN TRUE : VALUE WHEN FALSE

                var thingToReturn = complete ? "completed" : "not completed";

                return thingToReturn;

                // The above is a shortcut for this:
                // if (complete)
                // {
                //     return "completed";
                // }
                // else
                // {
                //     return "not completed";
                // }
            }
        }
    }

    class Program
    {
        static async System.Threading.Tasks.Task Main(string[] args)
        {
            var client = new HttpClient();

            // Getting the response of the API as a stream of data
            var responseAsStream = await client.GetStreamAsync("https://one-list-api.herokuapp.com/items?access_token=sdg-handbook");

            // Supply that *stream of data* to a Deserialize that will interpret it as a List of Item objects.
            List<Item> items = await JsonSerializer.DeserializeAsync<List<Item>>(responseAsStream);

            // For each item in our deserialized List of Item
            foreach (var item in items)
            {
                // Output some details on that item
                Console.WriteLine($"The task {item.text} was created on {item.created_at} and has a completion of: {item.CompletedStatus}");
            }
        }
    }
}

