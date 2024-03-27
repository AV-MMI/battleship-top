
class Ship {
    constructor(name, length, vertical=true, coord=[]){
        this.name = name,
        this.length = length,
        this.vertical = vertical,
        this.coord = coord,
        this.hits = 0;
    }

    hit(){
        if(this.hits < this.length){
            this.hits++;
        }
    }

    isSunk(){
        if(this.hits == this.length){
            return true;
        }

        return false;
    }
}

class Gameboard {
    constructor(sq){
        this.board = Array(sq).fill(null).map(() => Array(sq).fill(0));
        this.ships = [
            new Ship ("Carrier", 3, true,/*(Math.random() < 0.5)*/),
            new Ship ("Carrier", 3, true,/*(Math.random() < 0.5)*/),
            //new Ship ("Carrier", 2, true,/*(Math.random() < 0.5)*/),
            //{name: "Battleship", length: 3, vertical: (Math.random() < 0.5), coor: []},
            //{name: "Cruiser", length: 2, vertical: (Math.random() < 0.5), coor: []},
            //{name: "Submarine", length: 2, vertical: (Math.random() < 0.5), coor: []},
            //{name: "Destroyer", length: 1, vertical: (Math.random() < 0.5), coor: []},
        ];
        this.coords = [];
        this.invalidSquaresAdjList = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []}
    }
    
    // populates board
    populateBoard(){
        const getRandomArbitrary = (min, max) => {
            // max is inclusive
            return Math.ceil(Math.random() * (max - min) + min);
        }

        // helper function: generates an arr of x, and y, coordinates 0 <= x/y <= 9;
        const generateUniqueCoord = (ship, coord=[getRandomArbitrary(0, 9), getRandomArbitrary(0, 9)]) => {
            if(ship){
                // vertical
                if(ship.vertical){
                    if(this.board[ coord[0] ][ coord[1] ] == 0 &&
                        ((coord[0] + ship.length) <= 9) &&
                        this.board[ coord[0] + ship.length ][ coord[1] ] == 0 ){
                            return coord;
                    } else {
                        return generateUniqueCoord(ship, coord=[getRandomArbitrary(0, 9), getRandomArbitrary(0, 9)])
                    }
                } else {
                // horizontal
                if(this.board[ coord[0] ][ coord[1] ] == 0 &&
                    ((coord[1] + ship.length) <= 9) &&
                    this.board[ coord[0] ][ coord[1] + ship.length ] == 0 ){
                        return coord;
                    } else {
                        return generateUniqueCoord(ship, coord=[getRandomArbitrary(0, 9), getRandomArbitrary(0, 9)])
                    }
                }
            }
        }

        const placeShips = (ships) => {
            let shipsQueue = [];

            // assign coord to ship, and push it to coords Arr
            for(let i = 0; i < ships.length; i++){
                ships[i]["coord"] = generateUniqueCoord(ships[i])
                this.coords.push( ships[i]["coord"] );
                shipsQueue.push( ships[i] );
            }

            // populate ship coordinates
            do {
                let currentShip = shipsQueue.shift(); 
                
                // populate ship coordinates
                    // get coords
                let [x, y] = currentShip.coord; 

                    // ship is vertical
                if(currentShip.vertical){

                    
                    // populate X axis
                        // top with border
                    if(x-1 >= 0){
                        if(y-1 >= 0){
                            this.invalidSquaresAdjList[x-1].push(y-1);
                            this.board[x-1][y-1] = 2;
                        }
                        if(y+1 <= 9){
                            this.invalidSquaresAdjList[x-1].push(y+1);
                            this.board[x-1][y+1] = 2;       
                        }
                    }

                    for(let i = 0; i < currentShip.length; i++){
                        this.invalidSquaresAdjList[x].push(y);
                        this.board[x][y] = 1;

                        //populate surrounding squares
                        if(y-1 >= 0){
                            this.invalidSquaresAdjList[x].push(y-1);
                            this.board[x][y-1] = 2;
                        }
                        if(y+1 <= 9){
                            this.invalidSquaresAdjList[x].push(y+2);
                            this.board[x][y+1] = 2;
                        }

                        x++
                    }
                    //populate surrounding squares
                        // bottom with borders
                        if(x >= 0){
                            if(y-1 >= 0){
                                this.invalidSquaresAdjList[x].push(y-1);
                                this.board[x+1][y-1] = 2;
                            }
                            if(y+1 <= 9){
                                this.invalidSquaresAdjList[x].push(y+1);
                                this.board[x+1][y+1] = 2;           
                            }
                        }

                } 
                    // ship is horizontal
                else {
                    // populate Y axis
                    for(let i = 0; i < currentShip.length; i++){
                        this.invalidSquaresAdjList[x].push(y);
                        this.board[x][y] = 1;
                        y++

                        //populate surrounding squares
                        if(x-1 >= 0){
                            this.invalidSquaresAdjList[x].push(x-1);
                            this.board[x-1][y] = 2;
                        }
                        if(x+1 <= 9){
                            this.invalidSquaresAdjList[x].push(x+1);
                            this.board[x+1][y] = 2;
                        }
                    }

                    //populate surrounding squares
                    /*for(let i = 0; i < currentShip.length; i++){
                        this.invalidSquaresAdjList[x].push(y);
                        if(x-1 >= 0){
                            this.invalidSquaresAdjList[x].push(y-1);
                            this.board[x-1][y] = 2;
                        }
                        if(x+1 <= 9){
                            this.invalidSquaresAdjList[x].push(y+2);
                            this.board[x+1][y] = 2;
                        }
                    }*/

                }
            } while( shipsQueue.length > 0)

            // populate ship surroundings
        }

        placeShips(this.ships);
        return this.ships[0];

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

let pops = new Gameboard(10);

console.log(pops.populateBoard(), pops.board, 'bebe')

let board = pops.board;
console.log(board)                          