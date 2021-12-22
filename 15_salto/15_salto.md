## #15 El salto perfecto

¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, **Kiko Belfs**, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que **los números suben y bajan de forma correcta.** También nos avisa que sólo pasaremos **arrays de, como mínimo, tres posiciones.**

Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

```javascript

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube...¡no vale!
```

**Lo importante:** recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...



## Solución propuesta

```javascript

function checkSledJump(heights) {
   
    let max = Math.max(...heights)   
    let temp = -100;

    if(max == 0){
        return false;
    }else if(heights.length == 3){

        if(max == heights[1]){
            if(max > heights[0] && max > heights[2]){
                return true
            }
        }else{
            return false
        }
    }else{
        for (let i = 0; i < heights.length; i++) {
            if(heights[i] < max){
                if(heights[i] > temp){
                    temp = heights[i];
                }else{
                    return false
                }
            }else if(heights[i] == temp){
                return false
            }else if(heights[i] == max){
                temp = max;
                for (let j = (i+1); j < heights.length; j++) {
                    if(heights[j] >= max || heights[j] == temp || heights[j] > temp){
                        return false;
                    }else if(heights[j] < temp){
                        temp = heights[j];
                    }
                }
                return true
            }
        }
    }
}


```

---
