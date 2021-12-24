/**
 * 
 * Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Por ejemplo:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    

Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posi
 */

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth) )


/**
 * 
 * @param {Array} prices Contiene los valores de compra y venta
 * @returns {Number} Number que representa la mayor ganancia posible
 */

function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!

    let tempCompra = prices[0]; 
    let tempVenta = prices[0];
    let compraFinal = 0;
    let ventaFinal = 0;
    let gananciaMax = 0;
    let indiceCompra = 0;
    let indiceVenta = 0;
    let auxCompra = 0;


    for (let i = 0; i < prices.length; i++) {
        
        /**
         * Si mi temporal de compra es mayor del nuevo
         * puedo cambiar mi valor de compra pues es más barato
         * podría ser mejor venta (prices[i])
         * 
        */

        if(tempCompra > prices[i]){
            tempCompra = prices[i];
            auxCompra = i;
            tempVenta = 0;
        }

        /**
         * Si mi temporal de Venta es menor al nuevo elemento
         * puede ser que me convenga vender y consiga una mejor
         * ganancia
         */
        if(tempVenta < prices[i]){
            /** 
             * si el nuevo nuemero menos mi compra es mayor a 
             * la ganancia que tenia pues me cambio de valores 
             * de venta, de ganancia y compra
             */
            if(gananciaMax < prices[i] - tempCompra ){
                gananciaMax = prices[i] - tempCompra;
                compraFinal = tempCompra;
                indiceCompra = auxCompra;
                indiceVenta = i;
                ventaFinal = prices[i];
                tempVenta = ventaFinal;


            }
        }
        
    }

    if( gananciaMax == 0){
        return -1;
    }else{
        return gananciaMax;
    }
    
}