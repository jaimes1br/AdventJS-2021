
const carta = ' bici coche  balón _playstation   bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/


/**
 * 
 * @param {String} letter Contiene un texto con cada uno de los regalos
 * @returns {Object} Un objeto donde cada llave es un regalo y su contenido las 
 *                   veces que aparece en la carta 
 */
function listGifts(letter) {
    letter = letter.split(" ");
    letter = letter.filter(regalo => regalo != '');
    
    let regalos = {}

    letter.forEach(regalo => {
        if(!regalo.includes('_')){

            (Object.keys(regalos).includes(regalo)) ? regalos[regalo] += 1 : regalos[regalo] = 1 
        }
        
    });
    
    return regalos
}