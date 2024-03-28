import { Ship } from '../ship.js'

let ship1 = new Ship("Carrier", 5, true, [1, 2]);

let shipMock = {
    name: "Carrier",
    length: 5,
    vertical: true,
    coor: [1, 2],
    hits: 0,

}

test('Basic props', () => {
    expect( typeof ship1 ).toBe( "object" )
} )

test('Contains hit method', () => {
    expect( typeof ship1.hit ).toBe( "function" )
} )

test('Contains isSunk method', () => {
    expect( typeof ship1.isSunk ).toBe( "function" )
} )

test('Contains placeShip method', () => {
    expect( typeof ship1.placeShip).toBe( "function" );
})

