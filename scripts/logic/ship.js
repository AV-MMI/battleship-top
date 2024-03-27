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
}