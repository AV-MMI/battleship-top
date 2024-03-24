export { Ship }

class Ship {
    constructor(name, length, vertical=true, coor=[]){
        this.name = name,
        this.length = length,
        this.vertical = vertical,
        this.coor = coor,
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