function guardarDatos(){
  let nombreUsuario = document.getElementById('exampleInputName1').value;
  let contraseñaUsuario = document.getElementById('exampleInputPassword1').value;

  let user = {
    nombreUsuario: nombreUsuario,
    contraseñaUsuario : contraseñaUsuario
  };

  let usuarioJSON = JSON.stringify(user);

  localStorage.setItem('datosUsuario', usuarioJSON);

  alert('Datos guardados con éxito')

  document.getElementById('userName').innerHTML = "¡Hola, " + nombreUsuario + "!";

}

let usuarioJSON = localStorage.getItem('datosUsuario');
  if (usuarioJSON) {
    let user = JSON.parse(usuarioJSON);
    document.getElementById('userName').innerHTML = "¡Hola, " + user.nombreUsuario + "!";
  }

  function cerrarSesion(){
    localStorage.removeItem('datosUsuario');
    document.getElementById('userName').innerHTML = "Usuario";
  }
  

  function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultadoIMC = peso / (altura * altura);
    let resultado = "Tu IMC es: " + resultadoIMC;
  
  document.getElementById("resultado").innerHTML = resultado;
  let rutinaRecomendada = determinarRutina(resultadoIMC);
  document.getElementById('rutina').innerHTML = "tu rutina recomendada es: " + rutinaRecomendada;

  }

  function determinarRutina(resultado) {
    let rutina = "";
    if (resultado < 18.5) {
      rutina = "Rutina para aumentar masa muscular";
    } else if (resultado >= 18.5 && resultado < 25) {
      rutina = "Rutina de mantenimiento";
    } else {
      rutina = "Rutina para perder peso";
    }
    return rutina;
  }
