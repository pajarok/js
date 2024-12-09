// con este codigo se espera a que nuestro sitio web
//se encuentre completamente cargado
window.onload = () => {
    const parrafo = document.getElementById('text')
    // console.log(parrafo.innerText) puede ser modificada para mostrar contenido distinto
    // parrafo.innerText = 'Texto actualizado'
    parrafo.innerHTML = '<li>Elemento 1</li><li>Elemento 2</li>'
}
// de esta manera debemos coloacar en htmle el scriprt al final de body
// esto para esperar que se cargue el HTML
// const parrafo = document.getElementById('text')
// console.log(parrafo.innerHTML)