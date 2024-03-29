# Battleship project

## Requirements 

- [X] Class Ship
	- [X] include their length and orientation, along with coords?
	- [X] hit() method that increase the number of received hits
	- [X] isSunk() method that tells if a ship has sunk according to its length and the number of hits received
	
- [ ]  Class Gameboard 
	 - [X] 10x10 board arr: 0 and 1
	 - [X] should be able to place ships at especific coordinates by calling the ship class
	 - [X] receiveAttack() that takes a coordinate and determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot. Gameboards should keep track of missed attacks so they can display them properly.
	 - [X] Gameboards should be able to report whether or not all of their ships have been sunk.
	
- [ ] Class Player
	- [ ] Players can take turns playing the game by attacking the enemy Gameboard.
	- [ ] Initially The game is played against the computer, so make the ‘computer’ capable of making random plays.
	- [ ] Implement two players
	
	
- [ ] Extra Credit
	- [ ] Implement drag and drop to allow players to place their ships.
	- [ ] Create a 2-player option that lets users take turns by passing the device back and forth.
	- [ ] Make sure the game is playable on a mobile screen and implement a ‘pass device’ screen so that players don’t see each others boards!
	- [ ] Polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’.
