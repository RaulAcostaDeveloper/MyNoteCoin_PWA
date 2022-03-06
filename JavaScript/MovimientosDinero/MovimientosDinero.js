function sumarValores(array){
    let resultadoSuma = 0;
    for (let index = 0; index < array.length; index++) {
        resultadoSuma += Number(array[index].cantidadElemento);
    }
    console.log('hola');
    return Number(resultadoSuma);
}