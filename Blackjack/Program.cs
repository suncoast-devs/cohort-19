using System;
using System.Collections.Generic;
using System.Linq;

namespace Blackjack
{
    class Hand
    {
        // Cards is a property that is a list of Card objects
        public List<Card> Cards = new List<Card>();

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

    class Card
    {
        // PROPERTY     Face
        public string Face { get; set; }

        // PROPERTY     Suit
        public string Suit { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // # Blackjack Problem

            // Blackjack is a card game played between a Player and a Dealer.

            // It is played with a single Deck of 52 Cards.

            // Cards have a Suit of either: "Club", "Diamond", "Heart", or "Spade"
            // Cards have a Face of either: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, or Ace.
            // The Cards have a Value based on their Face according to:

            // | Face  | Value |
            // | ----- | ----- |
            // | 2     | 2     |
            // | 3     | 3     |
            // | 4     | 4     |
            // | 5     | 5     |
            // | 6     | 6     |
            // | 7     | 7     |
            // | 8     | 8     |
            // | 9     | 9     |
            // | 10    | 10    |
            // | Jack  | 10    |
            // | Queen | 10    |
            // | King  | 10    |
            // | Ace   | 11    |

            // Both the Player and the Dealer have their own Hand of Cards. The Hand starts out empty at the start of the Game. The Dealer is dealt two cards from the deck and placed into its hand. The Player is dealt two cards from the deck and placed into their hand.

            // The total value of a hand is the sum of the values of all the cards in the hand.

            // When the game starts the Player is given a choice to Hit or Stand.

            // If the player Hits a card is dealt from the deck and placed in the player's Hand.

            // This continues while the player keeps on choosing Hit or if the player's hand Value exceeds 21 and the player busts and the game ends.

            // If the player Stands (not Hit) and the player has not busted then the dealer plays.

            // The dealer will continuously be dealt cards from the deck until it's hand value exceeds 17.

            // If the Dealers hand is more than 21 it has Busted and the game ends.

            // We compare the Value of the Players Hand to the Dealer Hand and whomever has a higher value, but not more than 21, wins.

            // # Examples

            // The player's hand contains 3H, 4C for a total value of 7.
            // The player hits and is given the 10S.
            // Hand value is now 17.
            // Player STANDS.
            // Dealer reveals a hand consisting of the 7D and the 5H for a total value of 12.
            // The dealer HITs and is dealt a 10C.
            // Dealer hand value is now 22. Dealer busts and game is over.

            // The player's hand contains 10H and the AH (Ace of Hearts) for a total value of 21 (Blackjack).
            // The player stands.
            // The dealer is dealt the 7S and the 7H for 14.
            // The dealer hits and is dealt a 6C for a total of 20.
            // Since this is more than 17 the Dealer stays.
            // The Player's Hand is 21 and the dealer Hand is 20 so the Player wins.

            // **We should make more examples**

            // # Data Structure

            // The following Nouns exist in the description of the "P"roblem:

            // - Deck
            // - Card
            // - Hand
            // - Player
            // - Dealer

            // These have the following STATE (properties) and BEHAVIOR (methods)

            // - Deck

            //   - Properties: A list of 52 cards
            //   - Behavior: Make a new deck of 52 shuffled cards. Deal one card out of the deck.

            // - Card

            //   - Properties: The Face of the card, the Suit of the card
            //   - Behaviors:
            //      -  The Value of the card according to the table in the "P"roblem part

            // - Hand

            //   - Properties: A list of individual Cards
            //   - Behaviors:
            //       - TotalValue representing the sum of the individual Cards in the list.
            //       - Add a card to the hand

            // - Player is just an instance of the Hand class
            // - Dealer is just an instance of the Hand class

            // # Algorithm

            // 1. Create a new deck
            // PEDAC ^^^^ 
            //   - Properties: A list of 52 cards
            //   Algorithm for making a list of 52 cards

            //   Make a blank list of cards
            var deck = new List<Card>();

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
                    deck.Add(ourCard);
                }
            }


            // 2. Ask the deck to make a new shuffled 52 cards

            // make n = number of cards in our deck
            var n = deck.Count();


            // for rightIndex from n - 1 down to 1 do:
            for (var rightIndex = n - 1; rightIndex >= 1; rightIndex--)
            {
                var randomNumberGenerator = new Random();

                //   leftIndex = random integer that is greater than or equal to 0 and LESS than rightIndex
                var leftIndex = randomNumberGenerator.Next(rightIndex);

                //   Now swap the values at rightIndex and leftIndex by doing this:
                //     leftCard = the value from deck[rightIndex]
                var leftCard = deck[rightIndex];
                //     rightCard = the value from deck[leftIndex]
                var rightCard = deck[leftIndex];
                //     deck[rightIndex] = rightCard
                deck[rightIndex] = rightCard;
                //     deck[leftIndex] = leftCard
                deck[leftIndex] = leftCard;
            }

            // Print out all the cards from the deck in order
            // foreach (var card in deck)
            // {
            //     Console.WriteLine($"The card on the deck is the {card.Face} of {card.Suit}");
            // }

            // 3. Create a player hand
            var player = new Hand();

            // 4. Create a dealer hand
            var dealer = new Hand();

            // 5. Ask the deck for a card and place it in the player hand
            //   PEDAC
            //   - Deck
            //   - Get the first from the deck
            var firstCardForPlayer = deck[0];

            //   - Remove that card from the deck so its not dealt again
            // This line is effectively the same as below
            // deck.RemoveAt(0);
            deck.Remove(firstCardForPlayer);

            //   - Add it to the hand
            player.AddCardToHand(firstCardForPlayer);

            // 6. Ask the deck for a card and place it in the player hand
            var secondCardForPlayer = deck[0];
            deck.Remove(secondCardForPlayer);
            player.AddCardToHand(secondCardForPlayer);

            // 7. Ask the deck for a card and place it in the dealer hand
            var firstCardForDealer = deck[0];
            deck.Remove(firstCardForDealer);
            dealer.AddCardToHand(firstCardForDealer);

            // 8. Ask the deck for a card and place it in the dealer hand
            var secondCardForDealer = deck[0];
            deck.Remove(secondCardForDealer);
            dealer.AddCardToHand(secondCardForDealer);

            // 9. Show the player the cards in their hand and the TotalValue of their Hand
            // PEDAC
            // Problem: Need to loop through all the cards in a Hand and print each one. Then print a total
            // Examples:   Hand has Ace of Hearts and the 3 of Diamonds.
            //             Ace of Hearts
            //             3 of Diamonds
            //             Total: 14
            // Data: We have enough, the Cards list has what we need.
            // Algorithm:
            //    Start a total at 0
            //    Loop through all the cards
            foreach (var card in player.Cards)
            {
                //       print that card
                Console.WriteLine($"The {card.Face} of {card.Suit}");

                //       Add that card's value to total
            }
            //    Print the total


            // 10. If they have BUSTED, then goto step 15
            // 11. Ask the player if they want to HIT or STAND
            // 12. If HIT
            //     - Ask the deck for a card and place it in the player hand, repeat step 10
            // 13. If STAND continue on
            // 14. If the dealer has busted then goto step 17
            // 15. If the dealer has less than 17
            //     - Add a card to the dealer hand and go back to 14
            // 16. Show the dealer's hand TotalValue
            // 17. If the player busted show "DEALER WINS"
            // 18. If the dealer busted show "PLAYER WINS"
            // 19. If the dealer's hand is more than the player's hand then show "DEALER WINS", else show "PLAYER WINS"
            // 20. If the value of the hands are even, show "DEALER WINS"

        }
    }
}
