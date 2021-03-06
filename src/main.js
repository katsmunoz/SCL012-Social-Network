
import { templateRegister } from './lib/register.js';
import { observador } from './lib/index.js';
import { templateLogin } from './lib/login.js';
import { templateHome } from './lib/home.js';


window.onhashchange = () => {
  routerHash(window.location.hash);
};

// Inicializar Firebase
const init = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyA866dHzLXbsfmKkNn69rj4ZrVxCLnfEb0',
    authDomain: 'red-social-lab20.firebaseapp.com',
    databaseURL: 'https://red-social-lab20.firebaseio.com',
    projectId: 'red-social-lab20',
    storageBucket: 'red-social-lab20.appspot.com',
    messagingSenderId: '871920292627',
    appId: '1:871920292627:web:8f2ebda74348e502a400e6',
  });
  // Initialize Firebase
  window.location.hash = '#register';
  observador();
};

init();

// Imprimir template del hash correspondiente en el div del html
export const templateOn = (hash) => {
  const router = hash.substring(1); // pide que lea desde el 2do caracter, se salta el #/
  const container = document.getElementById('content');
  container.innerHTML = ''; // vaciar contenedor para prender el div
  // Coincidir hash con template
  switch (router) {
    case 'home':
      container.appendChild(templateHome());
      break;
    case 'register':
      container.appendChild(templateRegister());
      break;
    case 'login':
      templateLogin((printContainer) => container.appendChild(printContainer));
      break;

    default:
      container.innerHTML = '`<h3> Página no encontrada </h3>`';
  }
};

// Carga el template del hash correspondiente
const routerHash = (hash) => {
  if (hash === '') { // hash por defecto muestra home
    return templateOn('#home');
  }
  if (hash === '#home') {
    return templateOn(hash);
  }
  if (hash === '#register') {
    return templateOn(hash);
  }
  if (hash === '#login') {
    return templateOn(hash);
  }
};
