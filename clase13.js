var sacha = {
  nombre: 'Lorena',
  apellido: 'Lifszyc',
  edad: 24,
  peso: 90
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(sacha)
  } else if (random < 0.5) {
    adelgazar(sacha)
  }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)

/**
 * generar un número aleatorio entre dos números que queramos:
 */

const numMax = 10
const numMin = 1

const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin)
// redondeamos el decimal que nos devuelve envolviendo todo en Math.round

numRandom() // 8
numRandom() // 5
numRandom() // 1
numRandom() // 10