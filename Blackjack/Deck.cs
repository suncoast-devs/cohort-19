using System;
using System.Collections.Generic;
using System.Linq;

namespace Blackjack
{
    class Deck
    {
        public List<Card> CardsInDeck = new List<Card>();

        // name        DealCard
        // input       nothing
        // work        find the first card, remove it and return it
        // output      a card
        public Card DealCard()
        {
            var topCard = CardsInDeck[0];
            CardsInDeck.Remove(topCard);

            return topCard;
        }




        public void MakesNewShuffledCards()
        {
            //   Suits is a list of "Club", "Diamond", "Heart", or "Spade"
            var suits = new List<string>() { "Club", "Diamond", "Heart", "Spade" };

            //   Faces is a list of 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, or Ace
            var faces = new List<string>() { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" };

            //   Go through all of the suits one at a time and in order
            //       Get the current suit
            foreach (var suit in suits)
            {
                // Alternative
                // for (var suitIndex = 0; suitIndex < suits.Count(); suitIndex++)
                // {
                //     var suit = suits[suitIndex];

                //       Go through all of the faces one a time and in order
                foreach (var face in faces)
                //          Get the current face
                {
                    //          With the current suit and the current face, make a new card
                    var ourCard = new Card()
                    {
                        Face = face,
                        Suit = suit,
                    };

                    //          Add that card to the list of cards
                    CardsInDeck.Add(ourCard);
                }
            }


            // 2. Ask the deck to make a new shuffled 52 cards

            // make n = number of cards in our deck
            var n = CardsInDeck.Count();


            // for rightIndex from n - 1 down to 1 do:
            for (var rightIndex = n - 1; rightIndex >= 1; rightIndex--)
            {
                var randomNumberGenerator = new Random();

                //   leftIndex = random integer that is greater than or equal to 0 and LESS than rightIndex
                var leftIndex = randomNumberGenerator.Next(rightIndex);

                //   Now swap the values at rightIndex and leftIndex by doing this:
                //     leftCard = the value from deck[rightIndex]
                var leftCard = CardsInDeck[rightIndex];
                //     rightCard = the value from deck[leftIndex]
                var rightCard = CardsInDeck[leftIndex];
                //     deck[rightIndex] = rightCard
                CardsInDeck[rightIndex] = rightCard;
                //     deck[leftIndex] = leftCard
                CardsInDeck[leftIndex] = leftCard;
            }
        }
    }
}
