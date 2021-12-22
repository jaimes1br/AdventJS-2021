/**
 * 
 * Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.
 * Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.
 * Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:
 * Símbolo       Valor
 *   .             1
 *   ,             5
 *   :             10
 *   ;             50
 *   !             100
 * 
 * Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱
 * 
 * Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:
 * 
 * decodeNumbers('...') // 3
 * decodeNumbers('.,') // 4 (5 - 1)
 * decodeNumbers(',.') // 6 (5 + 1)
 * decodeNumbers(',...') // 8 (5 + 3)
 * decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
 * decodeNumbers('.;') // 49 (50 - 1)
 * decodeNumbers('..,') // 5 (-1 + 1 + 5)
 * decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
 * decodeNumbers('.;!') // 49 (-1 -50 + 100)
 * decodeNumbers('!!!') // 300
 * decodeNumbers(';!') // 50
 * decodeNumbers(';.W') // NaN
 * 
 * 
 */

console.log('Hello word! 🌎')

console.log(decodeNumber('...'));

/**
 * 
 * @param {Array} symbols Contiene los símbolos a decodificar
 * @returns {Number} Representa el numero decodificado de los símbolos o NaN si hay problemas
 */
function decodeNumber(symbols) {

    const numbers = {
        '.' : 1,
        ',' : 5,
        ':' : 10,
        ';' : 50,
        '!' : 100
    }

    const symArray = symbols.split('');
    symArray.reverse();
    
    if(symArray.length != 0){
        
        let temp;
        let sum = [];
        for (let i = 0; i < symArray.length; i++) {
            if(Object.keys(numbers).includes(symArray[i])){
               
                if( i == 0){
                    temp = numbers[symArray[0]]
                    sum.push(numbers[symArray[0]])
                    //if: es el primer elemento
                }else{
                    if(numbers[symArray[i]] < temp){
                        sum.push(-1 * numbers[symArray[i]])
                        temp = numbers[symArray[i]]
                        //if: mi numero a la derecha es mayor, entonces lo resto el nuevo
                    }else{
                        sum.push(numbers[symArray[i]]);
                        temp = numbers[symArray[i]];
                        //else: el numero es igual o menor al que reviso
                    }                  
                    //else: No es el primer elemento
                }
                //if: es un simbolo corrrecto
            }else{
                return NaN;
                //else: es un caracter diferentne
            }
        }//for
        
        return sum.reduce((acc,elem) => acc + elem,0);
        //if:tengo elementos
    }else{
        return NaN;
        //else: no tiene elementos
    }
}