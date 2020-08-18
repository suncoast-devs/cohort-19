namespace Blackjack
{
    class Card
    {
        // PROPERTY     Face
        public string Face { get; set; }

        // PROPERTY     Suit
        public string Suit { get; set; }

        // Name    -- Value
        // Input   -- no
        // Work    -- Algorithm
        // Output  -- int
        public int Value()
        {
            var answer = 0;

            switch (Face)
            {
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "10":
                    answer = int.Parse(Face);
                    break;

                case "J":
                case "Q":
                case "K":
                    answer = 10;
                    break;

                case "A":
                    answer = 11;
                    break;
            }

            return answer;
        }
    }
}
