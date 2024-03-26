import { Ship } from './ship.js'
export { Gameboard }

class Gameboard {
    constructor(sq){
        this.board = Array(sq).fill(null).map(() => Array(sq).fill(0));
        this.ships = [];
        this.coords = [];
        this.invalidSquaresAdjList = {}
    }

    // helper function: generates an arr or x, y coordinates 0 >= x/y <= 9;
    generateCoord(ship){
        function getRandomArbitrary(min, max) {
            // max is inclusive
            return Math.ceil(Math.random() * (max - min) + min);
        }

        let switchLoop = true;
        let coord = [];

        do {
            let [x, y] = [getRandomArbitrary(0, 9), getRandomArbitrary(0, 9) ];
            
            // vertical
            if(ship.vertical){
                // check that our X axis can contain our ship
                if(x + ship.length <= 9){
                    coord = [x, y];
                    
                    if(!this.invalidSquaresAdjList[x]){
                        this.invalidSquaresAdjList[x] = [];
                        this.invalidSquaresAdjList[x].push( y );
                        switchLoop = false;
                    } else {
                        if(!this.invalidSquaresAdjList[x].includes( y ) ){
                            this.invalidSquaresAdjList[x].push( y );
                            switchLoop = false;
                        }
                    }

                }
            }
            //horizontal
            else {
                // check that our Y axis can contain our ship
                if(y + ship.length <= 9){
                    coord = [x, y];
                    
                    if(!this.invalidSquaresAdjList[ x ]){
                        this.invalidSquaresAdjList[ x ] = [];
                        this.invalidSquaresAdjList[ x ].push( y );
                        switchLoop = false;
                    } else {
                        if(!this.invalidSquaresAdjList[ x ].includes( y ) ){
                            this.invalidSquaresAdjList[ x ].push( y );
                            switchLoop = false;
                        }
                    }

                }

            }
        } while(switchLoop)
        
        return coord;
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

let popas = new Gameboard(10);

for(let i = 0; i < 10; i++) {
    console.log(popas.generateCoord( {name: "Carrier", length: 5, vertical: (Math.random() < 0.5), coor: []} ))
}
