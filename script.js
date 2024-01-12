  let nombreDeUsuario = prompt("ingresar nombre de usuario");
  nombreDeUsuario = nombreDeUsuario.toLowerCase()

 if (nombreDeUsuario == nombreDeUsuario){

  alert ("bienvenido " + nombreDeUsuario);

 }

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
  }
  
  let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
  let alturaEnMetros = parseFloat(prompt("Ingresa tu altura en metros:"));
  
  let resultadoIMC = calcularIMC(peso, alturaEnMetros);
  alert("Tu índice de masa corporal es: " + resultadoIMC);

  alert("ahora te hare una pregunta de cultura")

  
  let cultura = prompt("elegi la mejor pelicula de Shrek: \n 1- Shrek 1 \n 2- Shrek 2 \n 3- Shrek tercero \n 4- Shrek para siempre")
  switch(cultura){

    case "1":
        alert("Elegiste una buena opción, pero no la mejor")
        break;
    case "2":
        alert("Definitivamente la mejor pelicula de DreamWorks")
        break;
    case "3":
        alert("No me lo puedo creer")
        break;
    case "4":
        alert("Ni cerca")
    default:
        alert("elegiste una opcion no valida")
        break;

  }
 
