using System;
using System.Net.Http;

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

            var responseAsString = await client.GetStringAsync("https://one-list-api.herokuapp.com/items?access_token=sdg-handbook");

            Console.WriteLine(responseAsString);
        }
    }
}
