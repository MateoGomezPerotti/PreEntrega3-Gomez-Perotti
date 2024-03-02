function guardarDatos(){
  let nombreUsuario = document.getElementById('exampleInputName1').value;
  let contraseñaUsuario = document.getElementById('exampleInputPassword1').value;

  let user = {
    nombreUsuario: nombreUsuario,
    contraseñaUsuario : contraseñaUsuario
  };

  let usuarioJSON = JSON.stringify(user);

  localStorage.setItem('datosUsuario', usuarioJSON);

  Swal.fire({
    title: "Datos guardados con exito",
    text: "Tus datos han sido guardados correctamente",
    icon: "success"
  });

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

 function renderPosts() {
    fetch('./js/ejercicios.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenido = "";
        for (const product of data) {
            contenido += `<div class="col-md-3 mb-3">
            <div class="card border-2">
            <img src=${product.imagen} alt="${product.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${product.categoria}</h5>
                <p class="card-text">${product.nombre}</p>
            </div>
            </div>
            </div>`;
        }

        document.getElementById("resultado2").innerHTML = contenido;
    })
    .catch(error => {
        document.getElementById("resultado2").innerHTML = `<div class="alert alert-danger p-5 text-center" role="alert">Error! No se encuentra la URL a la que desea acceder!</div>`;
    })
}

renderPosts(); 
