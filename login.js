/*##### ------------ Variables ------------ #####*/
let element = document.getElementById('switch');
let boton = document.getElementById('boton-switch');
let footer = document.getElementById('footer');
let nachitoCorp = document.getElementById('footer-nachitoCorp');
let btnMAS = document.getElementById('footer-btnMAS');
let letraEspañol = document.getElementById('footer-lenguajeEspañol');
let body = document.getElementById('body');
let descripcion = document.getElementById('section-descripcion');
let crearPagina = document.getElementById('login-crearPagina');
let loginDescripcion = document.getElementById('login-descripcion');
let gif = document.getElementById('gif');
let darkface = document.getElementById('darkface');
let facebook = document.getElementById('section-titulo')
let login = document.getElementById('login');
let login_input1 = document.getElementById('login-input1');
let login_input2 = document.getElementById('login-input2');

/*##### ------------ Funcion ------------ #####*/
element.addEventListener("click", function modoDark() {
    element.classList.toggle('switchDarkMode');
    body.classList.toggle('bodyDarkMode');
    boton.classList.toggle('boton-switchDarkMode');
    footer.classList.toggle('footer-DarkMode');
    nachitoCorp.classList.toggle('footer-nachitoCorpDarkMode');
    btnMAS.classList.toggle('footer-btnMASDarkMode');
    letraEspañol.classList.toggle('footer-lenguajeEspañolDarkMode');
    descripcion.classList.toggle('section-descripcionDarkMode');
    crearPagina.classList.toggle('login-crearPaginaDarkMode');
    loginDescripcion.classList.toggle('login-descripcionDarkMode');
    gif.classList.toggle('gifDarkMode');
    darkface.classList.toggle('darkfaceDarkMode');
    facebook.classList.toggle('section-tituloDarkMode');
    login.classList.toggle('loginDarkMode');
    login_input1.classList.toggle('login-inputDarkMode');
    login_input2.classList.toggle('login-inputDarkMode');
    /*
    if (boton.classList.contains('boton-switch2')) {
        boton.classList.remove('boton-switch2')
        element.style.setProperty('--bg-bgc', 'rgb(200, 130, 0)');
    }
    else {
        boton.classList.add('boton-switch2');
    }
    */
});