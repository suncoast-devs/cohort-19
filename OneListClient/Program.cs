using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;
using ConsoleTables;

namespace OneListClient
{
    class Item
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("text")]
        public string Text { get; set; }

        [JsonPropertyName("complete")]
        public bool Complete { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime CreatedAt { get; set; }

        // Yeah, yeah, I know it is called updated_at in the JSON
        // but I really want to call it UpdatedAt
        [JsonPropertyName("updated_at")]
        public DateTime UpdatedAt { get; set; }

        public string CompletedStatus
        {
            // Build a custom GET to access this data
            get
            {
                // Ternary
                // condition ? VALUE WHEN TRUE : VALUE WHEN FALSE

                var thingToReturn = Complete ? "completed" : "not completed";

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
            // The token to use for the api is in the first element of the args array
            var token = "";

            if (args.Length == 0)
            {
                Console.Write("What list?: ");
                token = Console.ReadLine();
            }
            else
            {
                token = args[0];
            }

            var url = $"https://one-list-api.herokuapp.com/items?access_token={token}";

            var client = new HttpClient();

            // Getting the response of the API as a stream of data
            var responseAsStream = await client.GetStreamAsync(url);

            // Supply that *stream of data* to a Deserialize that will interpret it as a List of Item objects.
            List<Item> items = await JsonSerializer.DeserializeAsync<List<Item>>(responseAsStream);

            // Make a new fancy user interface table
            var table = new ConsoleTable("Description", "Created At", "Completed");

            // For each item in our deserialized List of Item
            foreach (var item in items)
            {
                // Add a row to that fancy table
                table.AddRow(item.Text, item.CreatedAt, item.CompletedStatus);
            }

            table.Write();
        }
    }
}

