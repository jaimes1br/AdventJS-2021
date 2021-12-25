## #25 El último juego y hasta el año que viene 

Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado _midurat_ 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto **los vídeos de midudev**, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: _up, down, left, right_ y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
    Una ```m``` es el ratón
    Un ```*``` es la comida

Vamos a ver unos ejemplos: 


```javascript
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
```
¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

## Solución propuesta

```javascript

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


```

---
