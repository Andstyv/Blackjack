# Blackjack

Simple Blackjack game built on the basis of a tutorial from Scrimba.

Features from tutorial:

- Draws two random cards at the start of the game
- If the sum of those cards is below 21, the player can choose to add another card
- If sum of cards over 21 => Game over

Functionality added:

- Added dealer-functionality. If user chooses to hold, two randomly generated cards will appear for the dealer
- Game compares user's and dealer's cards, and picks the winner based on standard blackjack rules
- User starts game with $1000 - By winning, $100 is added to total. Likewise, by losing, $100 is deducted from total. Blackjack pays $200.

Work in progress:

- (Experimental) Visual representation of user's cards by displaying pictures

To be done:

- Add all possible cards into an array that gets randomly picked from, thus making the possibilities of picking each card correct.
- Add visual representation of dealer's cards
- Add an alternative for the dealer to pick more than two cards if certain conditions is met (sum of cards below X)
