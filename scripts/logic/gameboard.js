export { Gameboard };

class Gameboard {
    constructor(sq){
        this.board = Array(sq).fill(null).map(() => Array(sq).fill(0));
        this.ships = [
        ];
        this.failedHitsAdjList = {};
    }
    
    // populates board
    generateValidCoord(ship){
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
                        this.board[ coord[0] + Math.ceil(ship.length/2) ][ coord[1] ] == 0 &&
                        this.board[ coord[0] + ship.length ][ coord[1] ] == 0 ){
                            return coord;
                    } else {
                        return generateUniqueCoord(ship, coord=[getRandomArbitrary(0, 9), getRandomArbitrary(0, 9)])
                    }
                } else {
                // horizontal
                if(this.board[ coord[0] ][ coord[1] ] == 0 &&
                    ((coord[1] + ship.length) <= 9) &&
                    this.board[ coord[0] ][ coord[1] + Math.ceil(ship.length/2) ] == 0 &&
                    this.board[ coord[0] ][ coord[1] + ship.length ] == 0 ){
                        return coord;
                    } else {
                        return generateUniqueCoord(ship, coord=[getRandomArbitrary(0, 9), getRandomArbitrary(0, 9)])
                    }
                }
            }
        }

        return generateUniqueCoord(ship);
    }

    receiveAttack(coord){
        let [x,y] = coord;
        
        // a ship has been hit
        if(this.board[x][y] == 1){
            // compare coords range to get the ship that has been hit
            for(let ship in this.ships){ 
                if(this.ships[ship].vertical){
                    // it hit the beginning of the ship
                    if(this.ships[ship].coord[0]/*X-axis*/ == x &&  this.ships[ship].coord[1]/*Y-axis*/ == y){
                        this.ships[ship].hit();
                    }

                    // it hit the end of the ship
                    else if((this.ships[ship].coord[0] + this.ships[ship].length-1)/*X-axis*/ == x &&  this.ships[ship].coord[1]/*Y-axis*/ == y){
                        this.ships[ship].hit();
                    }

                    // hit some part in the range
                    else if(((this.ships[ship].coord[0] < x) && (this.ships[ship].coord[0] + this.ships[ship].length-1 > x) && this.ships[ship].coord[1] == y)/*X-axis*/
                            && this.ships[ship].coord[1]/*Y-axis*/ == y){
                        this.ships[ship].hit();
                    }
                    
                } else {
                    // it hit the beginning of the ship
                    if(this.ships[ship].coord[0]/*X-axis*/ == x &&  this.ships[ship].coord[1]/*Y-axis*/ == y){
                        this.ships[ship].hit();
                    }

                    // it hit the end of the ship
                    else if(this.ships[ship].coord[0] == x/*X-axis*/ && /*Y-axis*/(this.ships[ship].coord[1] + this.ships[ship].length-1) == y){
                        this.ships[ship].hit();
                    }

                    // hit some part in the range
                    else if(( (this.ships[ship].coord[1] < y) && (this.ships[ship].coord[1] + this.ships[ship].length-1 > y) && this.ships[ship].coord[0] == x)/*X-axis*/){
                        this.ships[ship].hit();
                    }
                }
            }

        } else {
            if( !this.failedHitsAdjList[x] ){
                this.failedHitsAdjList[x] = [];
            }

            if(!this.failedHitsAdjList[x].includes(y)){
                this.failedHitsAdjList[x].push(y);
            }

            console.log(this.failedHitsAdjList, '<---')
        }
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