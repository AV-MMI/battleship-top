import { Gameboard } from "./gameboard.js";    
export { Ship }

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

    placeShip(board){
        if(this.coord.length !== 2){
            this.coord = board.generateValidCoord(this);
        }

        board.ships.push(this);
        let [x, y] = [...this.coord]
        if(this.vertical){
            // populate X axis
            for(let i = 0; i < this.length; i++){
                board.board[x][y] = 1;
                x++
            }

            // set back to original X,Y coords
            [x, y] = [...this.coord]
            //populate surrounding squares
                // top: left-right
            if(x-1 >= 0){
                board.board[x-1][y] = 2;
                if(y-1 >= 0){
                    board.board[x-1][y-1] = 2;
                }
                if(y+1 <= 9){
                    board.board[x-1][y+1] = 2;
                }
            }
                // in line: left-right
            for(let i = 0; i < this.length; i++){
                if(y-1 >= 0){
                    board.board[x][y-1] = 2;
                }
                if(y+1 <= 9){
                    board.board[x][y+1] = 2;
                }
                x++

            }
                // bottom: left-right
                if(x <= 9){
                    board.board[x][y] = 2;
                    if(y-1 >= 0){
                        board.board[x][y-1] = 2;
                    }
                    if(y+1 <= 9){
                        board.board[x][y+1] = 2;
                    }
                }
        } 
            // ship is horizontal
        else {
            // populate Y axis
            for(let i = 0; i < this.length; i++){
                board.board[x][y] = 1;              
                y++
            }

            // set back to original X,Y coords
            [x, y] = [...this.coord]
            //populate surrounding squares
                // left: top-bottom
            if(y-1 >= 0){
                board.board[x][y-1] = 2;
                if(x-1 >= 0){
                    board.board[x-1][y-1] = 2;
                }
                if(x+1 <= 9){
                    board.board[x+1][y-1] = 2;
                }
            }
                // in line: top-bottom
            for(let i = 0; i < this.length; i++){
                if(x-1 >= 0){
                    board.board[x-1][y] = 2;
                }
                if(x+1 <= 9){
                    board.board[x+1][y] = 2;
                }

                y++
            }
                // right: top-bottom
                if(y <= 9){
                    board.board[x][y] = 2;
                    if(x-1 >= 0){
                        board.board[x-1][y] = 2;
                    }
                    if(x+1 <= 9){
                        board.board[x+1][y] = 2;
                    }
                }
        }
    }
}