// Las listas (array) están en el archivo MovimientosListas.js
let myCash = enviaDataLocalStorage('myCashLocalStorage');
let totalDinero = 0;
let totalGastos = 0;
let totalRemaining = 0;
// Inicio de la aplicación
// Que tarde .300 seg para que de tiempo de cargar todas las funciones usadas
setTimeout(() => {
    calculaCantidades();
    actualizarVistaCantidadesInicio();
}, 300);

function actualizarMyCash(){
    myCash = document.getElementById('MyCashId').value;
    actualizaElementoLocalStorage('myCashLocalStorage', myCash);
    calculaCantidades();
    actualizarVistaCantidadesInicio();
}
function calculaCantidades(){
    totalDinero = calcularTotalDinero();
    totalGastos = calcularTotalGastos();
    totalRemaining = calcularTotalMyRemaining();
}
function calcularTotalDinero() {
    return Number(myCash) + Number(sumarValores(debitCards));
}
function calcularTotalGastos() {
    let totalMySpendOnWeek = Number(listaSemana.monday) + Number(listaSemana.thuesday) + Number(listaSemana.wednesday) + Number(listaSemana.thursday) + Number(listaSemana.friday) + Number(listaSemana.saturday) + Number(listaSemana.sunday);
    let totalMyExpenses = sumarValores(expenses);
    return totalMySpendOnWeek + totalMyExpenses;
}
function calcularTotalMyRemaining(){
    return totalDinero - calcularTotalGastos();
}
function sumarValores(array){
    // Retorna el total de la lista
    let resultadoSuma = 0;
    for (let index = 0; index < array.length; index++) {
        resultadoSuma += Number(array[index].cantidadElemento);
    }
    return Number(resultadoSuma);
}
function actualizarVistaCantidadesInicio(){
    let vistaMyTotal = document.getElementById('CantidadMyTotal');
    let vistaMyRemaining = document.getElementById('CantidadMyRemaining');
    let vistaMySafeSpendForToday = document.getElementById('CantidadMySafeSpendForToday');
    let vistaMyCash = document.getElementById('MyCashId');
    vistaMyTotal.innerHTML = totalDinero;
    vistaMyRemaining.innerHTML = totalRemaining;
    vistaMySafeSpendForToday.innerHTML = Number(totalRemaining / calculaDiasRestantesParaQuincena()).toFixed(2)//calculaDiasRestantesParaQuincena() está en MovimientosListas.js
    vistaMyCash.value = myCash;
}