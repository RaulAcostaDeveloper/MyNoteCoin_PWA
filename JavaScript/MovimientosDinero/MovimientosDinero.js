// Las listas están en el archivo MovimientosListas.js
function sumarValores(array){
    // Retorna el total de la lista
    let resultadoSuma = 0;
    for (let index = 0; index < array.length; index++) {
        resultadoSuma += Number(array[index].cantidadElemento);
    }
    return Number(resultadoSuma);
}