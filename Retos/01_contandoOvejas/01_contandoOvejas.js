
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

console.log(contarOvejas(ovejas))

/**
 * contarOvejas nos permite obtener, dependiendo del arreglo ingresado que ovejas cumplen 
 * con las condiciones de que su color sea rojo y que su nombre contega las letras a y n.
 *  
 * @param {Array} ovejas Es el arreglo que contiene a cada una de las ovejas con su nombre y color 
 * @returns {Array} Las ovejas que cumplen con las condiciones propuestas
 * 
 */

function contarOvejas(ovejas) {
    ovejas = ovejas.filter(oveja => 
        (oveja.color == 'rojo' && oveja.name.toLowerCase().includes('a') && oveja.name.toLowerCase().includes('n')));
    return ovejas
  }
  

