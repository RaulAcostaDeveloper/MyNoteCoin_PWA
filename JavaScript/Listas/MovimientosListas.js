// Listas
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
function aniadirElementoALista(tipoLista){

}
// Inicio de aplicación
actualizarLista('listaSemana');
calcularTotal('listaSemana');
function seleccionarElementoEditar(tipoLista, elementoLista){
    seleccionElementoEditar.tipoLista = tipoLista;
    seleccionElementoEditar.elementoLista = elementoLista;
    console.log(seleccionElementoEditar.tipoLista, seleccionElementoEditar.elementoLista);
}

function editaElementoEnLista(formularioUsado){
    let formulario = document.getElementById(formularioUsado);
    let formElement = formulario.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');

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

    switch (seleccionElementoEditar.tipoLista) {
        case 'listaSemana':
            switch (seleccionElementoEditar.elementoLista) {
                case 'monday':
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
            actualizarLista(seleccionElementoEditar.tipoLista);
            calcularTotal('listaSemana');
            break;
    
        default:
            break;
    }
    console.log(listaSemana);
    
    
}

function calcularTotal(tipoLista){
    switch (tipoLista) {
        case 'listaSemana':
            let total =     Number(listaSemana.monday) + Number(listaSemana.thuesday) + Number(listaSemana.wednesday) + Number(listaSemana.thursday) + Number(listaSemana.friday) + Number(listaSemana.saturday) + Number(listaSemana.sunday);
            document.getElementById("totalSpendOnWeek").innerHTML = total;
            break;
    
        default:
            break;
    }
}
function actualizarLista(tipoLista){
    switch (tipoLista) {
        case 'listaSemana':
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