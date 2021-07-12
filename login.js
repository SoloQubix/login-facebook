var element = document.getElementById('switch');
var valor = true;

element.addEventListener("click", function modoDark() {
    if (valor = true) {
        element.style.setProperty('--bg-pseudo1', 'unset')
        element.style.setProperty('--bg-pseudo2', 0)
        element.style.setProperty('--bg-bgc', 'black')
        valor = false;
    }else{
        element.style.setProperty('--bg-pseudo1', 0)
        element.style.setProperty('--bg-pseudo2', 'unset')
        element.style.setProperty('--bg-bgc', 'rgb(200, 130, 0)')
    }
});