//Esta función se usa en el archivo ManejoDePantallas
function _desaparecer(elementoDOM){
    //Trae del archivo TransicionDesaparecer.css la clase .desaparecer
    for (let i = 0; i < elementoDOM.children.length; i++) {
        elementoDOM.children[i].classList.add("desaparecer");
    }

    // Algunos elementos no se desaparecen por completo...
    //Por eso después de la animación hay que ponerle display none
    setTimeout(() => {
        elementoDOM.setAttribute("style", `
            display:none;
        `);
    }, 400);    

}

//display indica si aparecerá como block o flex
function _aparecer(elementoDOM){
    
    //Espera a que la animación de los otros elementos ocurra
    setTimeout(() => {        
        //Quita la clase de "desaparecer" de todos los nodos del elemento
        for (let i = 0; i < elementoDOM.children.length; i++) {
            elementoDOM.children[i].classList.remove("desaparecer");
        }
    
        //Quita el display none y pon si es "block" o "flex"
        elementoDOM.setAttribute("style", `
            display:block;
        `);
    }, 350);
}