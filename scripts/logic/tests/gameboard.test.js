import { Gameboard } from '../gameboard.js'

let newGameboard = new Gameboard();

test('Gameboard exist', () => {
    expect(typeof newGameboard).toEqual('object')
})

test('Gameboard has a board', () => {
    expect(typeof newGameboard).toEqual('object')
})

test('Gameboard contains a generateValidCoord method', () => {
    expect(typeof newGameboard.generateValidCoord).toEqual('function')
})

/*
test('PopulateBoard does register each ship in its ships arr', () => {
    newGameboard.populateBoard();
    expect(newGameboard.coords.length).toBe( 5 );
})
*/

test('Gameboard contains a receiveAttack() method', () => {
    expect(typeof newGameboard.receiveAttack).toEqual('function')
})

test('Gameboard contains an allShipsSunk() method', () => {
    expect(typeof newGameboard.allShipsSunk).toEqual('function')
})

test('Gameboard has all ships up', () => {
    expect(newGameboard.allShipsSunk()).toEqual(false)
})
