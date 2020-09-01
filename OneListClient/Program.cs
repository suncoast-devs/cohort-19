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
        public string created_at { get; set; }
        public string updated_at { get; set; }
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
                Console.WriteLine($"The task {item.text} was created on {item.created_at} and has a completion of: {item.complete}");
            }
        }
    }
}

