import { Gameboard } from '../gameboard.js'

let newGameboard = new Gameboard();

test('Gameboard exist', () => {
    expect(typeof newGameboard).toEqual('object')
})

test('Gameboard has a board', () => {
    expect(typeof newGameboard).toEqual('object')
})

test('Gameboard contains a generateCoord() method', () => {
    expect(typeof newGameboard.generateCoord).toEqual('function')
})

test('generateCoord() generates a coordinates arr', () => {
    expect(typeof newGameboard.generateCoord({length: 5, vertical: true} )).toEqual('object')
})

test('Gameboard contains a populateBoard method', () => {
    expect(typeof newGameboard.populateBoard).toEqual('function')
})

test('PopulateBoard does register each ship in its ships arr', () => {
    newGameboard.populateBoard();
    expect(newGameboard.ships.length).toBe(5);
})

test('Gameboard contains a receiveAttack() method', () => {
    expect(typeof newGameboard.receiveAttack).toEqual('function')
})

test('Gameboard contains an allShipsSunk() method', () => {
    expect(typeof newGameboard.allShipsSunk).toEqual('function')
})

test('Gameboard has all ships up', () => {
    expect(newGameboard.allShipsSunk()).toEqual(false)
})
