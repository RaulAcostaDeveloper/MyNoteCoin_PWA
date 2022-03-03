// Listas
// PENDIENTE Añadir las listas que faltan...
// Pendiente traer valores de Local Storage
let listaSemana = {
    monday:0,
    thuesday:0,
    wednesday:0,
    thursday:0,
    friday:0,
    saturday:0,
    sunday:0
}
// Objetos de contról
let seleccionElementoEditar = {
    tipoLista : "",
    elementoLista : "",
}
// Inicio de aplicación
actualizarListasYCalcularTotalListas();
function actualizarListasYCalcularTotalListas(){
    // PENDIENTE Añadir las listas que faltan...
    actualizarLista('listaSemana');
    calcularTotal('listaSemana');
}
// -------------------------------------------------------------------------------------------------------------
function aniadirElementoALista(tipoLista){
    // PENDIENTE Añadir flujo para añadir elementos a las listas

}
function seleccionarElementoEditar(tipoLista, elementoLista){
    seleccionElementoEditar.tipoLista = tipoLista;
    seleccionElementoEditar.elementoLista = elementoLista; //El ID del elemento a editar
    console.log(seleccionElementoEditar.tipoLista, seleccionElementoEditar.elementoLista);
}

function editaElementoEnLista(formularioUsado){
    let formulario = document.getElementById(formularioUsado);
    let formElement = formulario.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');

    // Esto es una validación, no debería ir aquí
    if (formularioUsado = 'listaSemana') {        
        if(inputElement[0].value.length == 0){
            alert("You must introduce an Amount", "Accept");
            console.log('Debe introducir un valor para semana');
            return false;
        }
    } else if ( inputElement[0].value.length == 0 ) {
        alert("You must introduce a Title");
        console.log('Debe introducir un Titulo');
        return false;
    } else if (inputElement[1].value.length == 0) {
        alert("You must introduce an Amount");
        console.log('Debe introducir una Cantidad');
        return false;
    }

    // PENDIENTE Añadir las listas que faltan...
    switch (seleccionElementoEditar.tipoLista) {
        case 'listaSemana':
            switch (seleccionElementoEditar.elementoLista) {
                case 'monday':
                    // Al elemento de la lista le asigna el valor del input
                    listaSemana.monday = inputElement[0].value;
                    break;
                case 'thuesday':
                    listaSemana.thuesday = inputElement[0].value;
                    break;
                case 'wednesday':
                    listaSemana.wednesday = inputElement[0].value;
                    break;
                case 'thursday':
                    listaSemana.thursday = inputElement[0].value;
                    break;
                case 'friday':
                    listaSemana.friday = inputElement[0].value;
                    break;
                case 'saturday':
                    listaSemana.saturday = inputElement[0].value;
                    break;
                case 'sunday':
                    listaSemana.sunday = inputElement[0].value;
                    break;
                default:
                    break;
            }
            // Cuando edita un valor en cualquiér lista, hay que actualizar y calcular total
            actualizarLista('listaSemana');
            calcularTotal('listaSemana');
            break;
    
        default:
            break;
    }
    console.log(listaSemana);
}

function calcularTotal(tipoLista){
    // PENDIENTE Añadir las listas que faltan...
    switch (tipoLista) {
        case 'listaSemana':
            // Suma los elementos con valor numérico de la lista y actualiza el total en el ID
            let total =     Number(listaSemana.monday) + Number(listaSemana.thuesday) + Number(listaSemana.wednesday) + Number(listaSemana.thursday) + Number(listaSemana.friday) + Number(listaSemana.saturday) + Number(listaSemana.sunday);
            document.getElementById("totalSpendOnWeek").innerHTML = total;
            break;
    
        default:
            break;
    }
}
function actualizarLista(tipoLista){
    // PENDIENTE Añadir las listas que faltan...
    switch (tipoLista) {
        case 'listaSemana':
            // Asigna los valores de la lista en el html
            document.getElementById('monday').innerHTML = listaSemana.monday;
            document.getElementById('thuesday').innerHTML = listaSemana.thuesday;
            document.getElementById('wednesday').innerHTML = listaSemana.wednesday;
            document.getElementById('thursday').innerHTML = listaSemana.thursday;
            document.getElementById('friday').innerHTML = listaSemana.friday;
            document.getElementById('saturday').innerHTML = listaSemana.saturday;
            document.getElementById('sunday').innerHTML = listaSemana.sunday;
            break;
    
        default:
            break;
    }
}