const room2 = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
  ]
//   canMouseEat('up',    room2)   // false
// canMouseEat('down',  room2)   // false
// canMouseEat('right', room2)   // true
// canMouseEat('left',  room2)   // false

console.log(canMouseEat('down',  room2))


/**
 * 
 * @param {String} direction :Dirección en que se mueve el ratón ;
 * @param {Array} game Contiene la habitación donde se puede mover le ratón  
 * @returns {Boolean} true; el ratón encontró comida, false; caso contrario
 */
function canMouseEat(direction, game) {
    
    let raton = [];
    let mov = [];

    for (let i = 0; i < game.length; i++) {   
        if( game[i].find(ele => ele === 'm')){
            raton.push(i)
            raton.push(game[i].indexOf(game[i].find(ele => ele === 'm')))
        }
    }
    mov = raton.slice()

    const movObj = {
        'up': game?.[mov[0] - 1]?.[mov[1]],
        'down': game?.[mov[0] + 1]?.[mov[1]],
        'left': game?.[mov[0]]?.[mov[1] - 1],
        'right': game?.[mov[0]]?.[mov[1] + 1],
    }

    return movObj[direction] === '*';
}