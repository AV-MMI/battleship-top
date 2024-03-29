import { Gameboard } from '../gameboard.js';
import { Ship } from '../ship.js';

let newGameboard = new Gameboard(10);
let laNiñaV = new Ship ("LaNiña", 3, (true), [3,3]);
let laPintaH = new Ship ("LaPinta", 3, (false), [1,3]);

laNiñaV.placeShip(newGameboard);
laPintaH.placeShip(newGameboard);

test('Gameboard exist', () => {
    expect(typeof newGameboard).toEqual('object')
})

test('Gameboard has a board', () => {
    expect(typeof newGameboard).toEqual('object')  
})

test('Gameboard contains a generateValidCoord method', () => {
    expect(typeof newGameboard.generateValidCoord).toEqual('function')
})

describe('receiveAttack() method tests', () => {
    test('Gameboard contains a receiveAttack() method', () => {

        expect(typeof newGameboard.receiveAttack).toEqual('function')
    })
    
    describe('attack vertical ship: laNiña', () => {    
        test('attack beginning of the ship', () => {
            newGameboard.receiveAttack([3,3]);
            expect(laNiñaV.hits).toBe(1);
        })

        test('attack middle of the ship', () => {
            newGameboard.receiveAttack([4,3]);
            expect(laNiñaV.hits).toBe(2);   
        })  

        test('attack end of the ship', () => {
            newGameboard.receiveAttack([5,3]);
            expect(laNiñaV.hits).toBe(3);
        })  

        test('La niña is sunk', () => {
            console.log(laNiñaV.hits)
            expect(laNiñaV.isSunk()).toBe(true) 
        })
    })

    describe('attack horizontal ship: laPintaH', () => {
        test('attack beginning of the ship', () => {
            newGameboard.receiveAttack([1,3]);
            console.log(laPintaH.coord)
            expect(laPintaH.hits).toBe(1);
        })

        test('attack middle of the ship', () => {
            newGameboard.receiveAttack([1,4]);
            expect(laPintaH.hits).toBe(2);   
        })  

        test('attack end of the ship', () => {
            newGameboard.receiveAttack([1,5]);
            expect(laPintaH.hits).toBe(3);
        })  

        test('La Pinta is sunk', () => {
            console.log(laPintaH.hits)
            expect(laPintaH.isSunk()).toBe(true)  
        })
        
    })
})  

test('Gameboard contains an allShipsSunk() method', () => {
    expect(typeof newGameboard.allShipsSunk).toEqual('function')
})


test('Gameboard has all ships up', () => {
    expect(newGameboard.allShipsSunk()).toEqual(true)                  
})          
