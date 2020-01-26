let elementos = [
  {
    accion: 'GET',
    URL: '/productos/{id}',
    descripcion: 'Hace una peticion a la BD para obtener un producto activo de la BD'
  },
  {
    accion: 'GET',
    URL: '/productos',
    descripcion: 'Hace una peticion a la BD para obtener todos los productos activos de la BD'
  },
  {
    accion: 'POST',
    URL: '/productos',
    descripcion: 'Añade un nuevo producto a la base de datos'
  },
  {
    accion: 'DELETE',
    URL: '/productos/{id}',
    descripcion: 'Borra un producto de la base de datos'
  },
  {
    accion: 'PUT',
    URL: '/productos/{id}',
    descripcion: 'Actualiza un producto de la base de datos'
  },
];


for (var i = 0; i < elementos.length; i++) {
  let elemento = elementos[i];
  crearElemento(elemento);
}

function crearElemento(elemento) {
  var color = calcularColor(elemento.accion)

  var mainEL = document.getElementById('main');

  var peticionEL = document.createElement('div');
  peticionEL.setAttribute('class', 'peticion');
  peticionEL.style.backgroundColor = color.secondary;
  peticionEL.style.borderColor = color.primary;

  var accionEL = document.createElement('span');
  accionEL.setAttribute('class', 'accion');
  accionEL.innerHTML = elemento.accion;
  accionEL.style.backgroundColor = color.primary;

  var URLEL = document.createElement('span');
  URLEL.setAttribute('class', 'URL');
  URLEL.innerHTML = elemento.URL;


  var descripcionEL = document.createElement('span');
  descripcionEL.setAttribute('class', 'descripcion');
  descripcionEL.innerHTML = elemento.descripcion;

  peticionEL.appendChild(accionEL);
  peticionEL.appendChild(URLEL);
  peticionEL.appendChild(descripcionEL);

  mainEL.appendChild(peticionEL);

}

function calcularColor(accion) {
  let resul = {};
  switch (accion.toUpperCase()) {
    case 'GET':
      resul = { primary: '#61affe', secondary: 'rgba(97,175,254,.1)' }
      break;
    case 'POST':
      resul = { primary: '#49cc90', secondary: 'rgba(73,204,144,.1)' }
      break;
    case 'DELETE':
      resul = { primary: '#f93e3e', secondary: 'rgba(249,62,62,.1)' }
      break;
    case 'PUT':
      resul = { primary: '#fca130', secondary: 'rgba(252,161,48,.1)' }
      break;
  }
  return resul;
}