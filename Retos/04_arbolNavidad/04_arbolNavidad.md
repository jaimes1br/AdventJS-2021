# #4 ¡Es hora de poner la navidad en casa! 

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento ```5```, se pintaría esto:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

```

Creamos un triángulo de asteríscos ```*``` con la altura proporcionada y, a los lados, usamos el guión bajo ```_``` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de ```#```.

Otro ejemplo con un árbol de altura ```3```:

```javascript
__*__
_***_
*****
__#__
__#__

```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea ```\n``` para cada línea para que se forme bien el árbol.
## Solución propuesta

```javascript

function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let arbolito = ''
    let renglones = []

    if(height >= 1 && height <=100){
        
        for (let i = 0; i < height; i++) {
            if(i == 0){
                renglones.push(1)
            }else{
                let temp = renglones[i-1]
                temp += 2;
                renglones.push(temp)
            }

        }
       
        let max = renglones[renglones.length-1]
        renglones.forEach(linea => {
            let espacios = max - linea
            let espacioLado = espacios / 2;
            for(let i = 0 ; i < espacioLado; i++){
                arbolito += '_';
            } 

            for(let i = 0 ; i < linea; i++){
                arbolito += '*';
            }

            for(let i = 0 ; i < espacioLado; i++){
                arbolito += '_';
            }
            arbolito += '\n'
        })

        for (let i = 0; i < 2; i++) {
            let espacios = max - 1
            let espaciosL = espacios / 2;
            for(let i = 0; i < espaciosL; i++){
                arbolito += '_';
            }
            arbolito += '#'
            for(let i = 0; i < espaciosL; i++){
                arbolito += '_';
            }
            if(i == 0){
                arbolito += '\n'
            }
        }

    }//numero valido
    return arbolito
}

```

---