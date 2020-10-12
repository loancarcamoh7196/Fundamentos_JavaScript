function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura  =  altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  debugger
  this.altura >= 1.8 ? 
  console.table(`${this.nombre} es alt@ como jirafa`) : 
  console.table(`${this.nombre} es chiquit@ como una pepita de ají`)
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.9)
var erika = new Persona('Erika', 'Luna', 1.5)
var arturo = new Persona('Arturo', 'Martinez', 1.7)
var lorena = new Persona('Lorena', 'Carcamo', 1.65)


lorena.saludar();
lorena.soyAlto();

sacha.saludar();
sacha.soyAlto();