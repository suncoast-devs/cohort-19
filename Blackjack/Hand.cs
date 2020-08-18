using System;
using System.Collections.Generic;

namespace Blackjack
{
    class Hand
    {
        // Cards is a property that is a list of Card objects
        public List<Card> Cards = new List<Card>();


        // name - TotalValue
        // input - no
        // work - add up the value of all cards
        // output - total value of all the cards (int)
        public int TotalValue()
        {
            var total = 0;

            foreach (var card in Cards)
            {
                total = total + card.Value();
            }

            return total;
        }

        // name    - Busted
        // input   - no
        // work    - compare TotalValue() to 21
        // output  - bool  (true if the total value is > 21, false otherwise)
        public bool Busted()
        {
            if (TotalValue() > 21)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        // name      Display
        // input     no
        // work
        // output    no
        public void Display()
        {
            foreach (var card in Cards)
            {
                Console.WriteLine($"The {card.Face} of {card.Suit}");
            }
            Console.WriteLine($"The total is: {TotalValue()}");
            Console.WriteLine();
        }

        // name
        // input type
        // work
        // output type
        public void AddCardToHand(Card cardToAdd)
        {
            // PEDAC
            // Problem:
            // -- Take a card as given in the input and keep track of it

            // Examples
            // -- Example:
            //     AddCardToHand( .. A of Hearts ..)
            //     AddCardToHand( .. 3 of Diamonds .. )
            //
            //     -- hand should have two cards in it
            //
            // Data
            // -- What kind of variable might help here?
            // -- List is helpful
            //
            // Algorithm for this
            // -- Take the card given in input and add it to our list
            Cards.Add(cardToAdd);
        }
    }
}
