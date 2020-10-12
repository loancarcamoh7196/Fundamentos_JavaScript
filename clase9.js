var x = 4, y = '4'

var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}

var obj1 = {
	obj2 : {
		nombre: 'victor',
		edad: 19
	}
}


function saludar(obj){
	var {nombre, edad} = obj.obj2
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
saludar(obj1) // Salida ->  Hola me llamo victor y tengo 19 años

function cumpleannos(persona){

  return {
     ...persona, 
     edad :persona.edad +1 ,
  }
}

function cumpleanos(persona){

  return persona.edad + 1; 
}
