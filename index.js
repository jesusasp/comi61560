//simulador de gestor de pago (basado en splitwise)


function saludar() {
    console.log("Buenos dias," +" " + nombre + "!");
} 
const nombre = prompt("Ingrese nombre")
saludar (nombre)

cont=0;
while(cont < 3) {;
  var contrasena=prompt("Introduzca su contraseña (es abc123)");
if(contrasena=='abc123') {
    alert('Los datos son correctos');
    cont = 0;
    break;
}else{
    if(contrasena !== 'abc123') {
      alert('contraseña incorrecta (recuerda que es abc123)');
    }
    else if(contrasena !== 'abc123') {
      alert('contraseña incorrecta (solo escribe abc123)');
    }
    else{
      cont++;
      alert('Error. Los datos son incorrectos');
    }	
    if(cont==3) {
      alert('Lo siento, has agotado el número de intentos');
    }	
  }	
}


alert("Esta es una calculadora de cuotas con una base de interes del 50%")

function calcularCuotas(monto, cuotas, tasaInteres) {
  const montoTotalConInteres = monto * (1 + tasaInteres);
  const montoCuota = montoTotalConInteres / cuotas;
  return { montoTotalConInteres, montoCuota };
}

let tasaInteres = 0.5
let continuar = true;

while (continuar) {
  const montoProducto = parseFloat(prompt("Ingrese el monto del producto:"));
  const numeroCuotas = parseInt(prompt("Ingrese el número de cuotas:"));
  const resultado = calcularCuotas(montoProducto, numeroCuotas, tasaInteres);

  console.log("El monto total con los intereses es:" + " "+ resultado.montoTotalConInteres);
  console.log("El monto de la cuota es:" + " " + resultado.montoCuota + " por " + numeroCuotas + " meses");

  const respuesta = prompt("¿Desea calcular cuotas nuevamente? (Sí/No)").toLowerCase();
  continuar = respuesta === 'si' || respuesta === 'sí';
} 
alert("Muchas gracias!")


//Esto es parte del after que dijeron que tambien sirve para la pre-entrega

// function sumar() {
//   const num1 = parseInt(prompt("Ingrese primer numero"));
//   const num2 = parseInt(prompt("Ingrese segundo numero"));  
//   const resultado = num1 + num2
//   alert(num1 +" + " +num2 + " = " + resultado)
// }
// function restar() {
//   const num1 = parseInt(prompt("Ingrese primer numero"));
//   const num2 = parseInt(prompt("Ingrese segundo numero"));
//   const resultado = num1 - num2
//   alert(num1 +" - " +num2 + " = " + resultado)
// }
// function multiplicar() {
//   const num1 = parseInt(prompt("Ingrese primer numero"));
//   const num2 = parseInt(prompt("Ingrese segundo numero"));
//   const resultado = num1 * num2
//   alert(num1 +" * " +num2 + " = " + resultado)
// }
// function dividir() {
//   const num1 = parseInt(prompt("Ingrese primer numero"));
//   const num2 = parseInt(prompt("Ingrese segundo numero"));
//   const resultado = num1 / num2
//   alert(num1 +" / " +num2 + " = " + resultado)
// }


// let opcion = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))

// while(opcion !== 5){
//   switch (opcion){
//     case 1:
//       //sumar
//     sumar()
//       break;
//     case 2:
//       //restar
//     restar()
//       break;
//     case 3:
//       //multiplicar
//     multiplicar()
//       break;
//     case 4:
//       //dividir
//     dividir()
//       break;
//     default:
//       alert("opcion incorrecta")
//       break;
//   }
//   opcion = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))
// }

//   alert("finalizando funcion, enter para cerrar")