import { Ship } from './ship.js'
export { Gameboard }

class Gameboard {
    constructor(sq){
        this.board = Array(sq).fill(null).map(() => Array(sq).fill(0));
        this.ships = [];
        this.coords = [];
    }

    generateCoord(){
        let ships = asd;
    }

    // populates board with the followings ships:
    // 5 ships in total with the following length: 5, 4, 3, 3, 2
    populateBoard(){
        let ships = [
            {name: "Carrier", length: 5, vertical: (Math.random() < 0.5), coor: []},
            {name: "Battleship", length: 4, vertical: (Math.random() < 0.5), coor: []},
            {name: "Cruiser", length: 3, vertical: (Math.random() < 0.5), coor: []},
            {name: "Submarine", length: 3, vertical: (Math.random() < 0.5), coor: []},
            {name: "Destroyer", length: 2, vertical: (Math.random() < 0.5), coor: []},
        ];

        for(let i = 0; i < ships.length; i++){
            const ship = new Ship( ships[i] );
            this.ships.push( ship );

            // place ships in map
        }
    }

    receiveAttack(coor){
        let ships = asd;
    }

    allShipsSunk(){
        for(let i = 0; i < this.ships.length; i++){
            if(!this.ships[i].isSunk()){
                return false;
            }
        }

        return true;
    }

}