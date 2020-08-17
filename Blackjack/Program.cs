using System;

namespace Blackjack
{
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
            // 2. Ask the deck to make a new shuffled 52 cards
            // 3. Create a player hand
            // 4. Create a dealer hand
            // 5. Ask the deck for a card and place it in the player hand
            // 6. Ask the deck for a card and place it in the player hand
            // 7. Ask the deck for a card and place it in the dealer hand
            // 8. Ask the deck for a card and place it in the dealer hand
            // 9. Show the player the cards in their hand and the TotalValue of their Hand
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
