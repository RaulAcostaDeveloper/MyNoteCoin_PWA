// Listas
// Pendiente traer valores de Local Storage
let listaSemana = {
    monday:0,
    thuesday:0,
    wednesday:0,
    thursday:0,
    friday:0,
    saturday:0,
    sunday:0
};
// tituloElemento: inputElement[0].value,
// cantidadElemento:inputElement[0].value,
// idElemento: 'debtors'+idDebtors
let expenses = [];
let idExpenses = 0;
let debitCards = [];
let idDebitCards = 0;
let debts = [];
let idDebts = 0;
let debtors = [];
let idDebtors = 0;
let pendings = [];
let idPendings = 0;
let paymentDays = {
    firstPaymentDay:15,
    secondPaymentDay:31
};
// Objetos de contról
let seleccionElemento = {
    tipoLista : "",
    elementoLista : "",
};
// Inicio de aplicación
actualizarListasYMostrarTotalListas();
function actualizarListasYMostrarTotalListas(){
    // PENDIENTE Añadir las listas que faltan...
    actualizarLista('listaSemana');
    mostrarTotal('listaSemana');
    // actualizarLista('expenses');
    // mostrarTotal('expenses');
    // actualizarLista('debitCards');
    // mostrarTotal('debitCards');
    // actualizarLista('debts');
    // mostrarTotal('debts');
    // actualizarLista('debtors');
    // mostrarTotal('debtors');
    // actualizarLista('pendings');
    // mostrarTotal('pendings');
}
// -------------------------------------------------------------------------------------------------------------
function seleccionarElemento(tipoLista, elementoLista){
    seleccionElemento.tipoLista = tipoLista;
    seleccionElemento.elementoLista = elementoLista; //El ID del elemento a editar
    console.log('seleccionarElementos ' + seleccionElemento.tipoLista, seleccionElemento.elementoLista);
}
function aniadirElementoALista(formularioUsado){
    console.log(formularioUsado);
    let formulario = document.getElementById(formularioUsado);
    let formElement = formulario.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');

    if ( inputElement[0].value.length == 0 ) {
        alert("You must introduce a Title");
        console.log('Debe introducir un Titulo');
        return false;
    } else if (inputElement[1].value.length == 0) {
        alert("You must introduce an Amount");
        console.log('Debe introducir una Cantidad');
        return false;
    }


    switch (seleccionElemento.tipoLista) {
        case 'expenses':
            idExpenses++;
            expenses.push({
                tituloElemento: inputElement[0].value,
                cantidadElemento:inputElement[1].value,
                idElemento: 'expenses'+idExpenses
            });
            console.log(expenses);
            actualizarLista('expenses');
            mostrarTotal('expenses');
            _MyExpenses();//De ManejoDePantallas.js
            break;
        case 'debitCards':
            idDebitCards++;
            debitCards.push({
                tituloElemento: inputElement[0].value,
                cantidadElemento:inputElement[1].value,
                idElemento: 'debitCards'+idDebitCards
            });
            console.log(debitCards);
            actualizarLista('debitCards');
            mostrarTotal('debitCards');
            _MyDebitCards();//De ManejoDePantallas.js
            break;
        case 'debts':
            idDebts++;
            debts.push({
                tituloElemento: inputElement[0].value,
                cantidadElemento:inputElement[1].value,
                idElemento: 'debts'+idDebts
            });
            console.log(debts);
            actualizarLista('debts');
            mostrarTotal('debts');
            _MyDebts();//De ManejoDePantallas.js
            break;
        case 'debtors':
            idDebtors++;
            debtors.push({
                tituloElemento: inputElement[0].value,
                cantidadElemento:inputElement[1].value,
                idElemento: 'debtors'+idDebtors
            });
            console.log(debtors);
            actualizarLista('debtors');
            mostrarTotal('debtors');
            _MyDebtors();//De ManejoDePantallas.js
            break;
        case 'pendings':
            idPendings++;
            pendings.push({
                tituloElemento: inputElement[0].value,
                cantidadElemento:inputElement[1].value,
                idElemento: 'pendings'+idPendings
            });
            console.log(pendings);
            actualizarLista('pendings');
            mostrarTotal('pendings');
            _MyPendings();//De ManejoDePantallas.js
            break;
        default:
            break;
    }
    
    console.log('Valores Nuevos: ' + inputElement[0].value + " " + inputElement[1].value);
}
// En Construcción
function editaElementoEnLista(formularioUsado){
    console.log('formularioUsado ' + formularioUsado);
    let formulario = document.getElementById(formularioUsado);
    let formElement = formulario.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');

    // Esto es una validación, no debería ir aquí
    // Replicar validación para cuando se añade elemento
    if (formularioUsado == 'EditaUnDiaDeLaSemana') {        
        if(inputElement[0].value.length == 0){
            alert("You must introduce an Amount");
            console.log('Debe introducir un valor para semana');
            return false;
        }
    } else if(formularioUsado == 'EditaDiasDePago'){
        if(inputElement[0].value.length == 0 || inputElement[1].value.length == 0){
            alert("You must introduce an Amount");
            console.log('Debe introducir un valor para Día de pago');
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

    //Para usarlo dentro del Switch;
    let indexElemento;
    switch (seleccionElemento.tipoLista) {
        case 'listaSemana':
            switch (seleccionElemento.elementoLista) {
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
            console.log(listaSemana);
            actualizarLista('listaSemana');
            mostrarTotal('listaSemana');
            _mySpendOnWeek();
            break;
        case 'expenses':
            // Encontrar el elemento por su ID en la lista y modificarlo
            indexElemento = encontrarElementoEnLista(expenses);
            expenses[indexElemento].tituloElemento = inputElement[0].value;
            expenses[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(expenses);
            actualizarLista('expenses');
            mostrarTotal('expenses');
            _MyExpenses();
            break;
        case 'debitCards':
            // Encontrar el elemento por su ID en la lista y modificarlo
            indexElemento = encontrarElementoEnLista(debitCards);
            debitCards[indexElemento].tituloElemento = inputElement[0].value;
            debitCards[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(debitCards);
            actualizarLista('debitCards');
            mostrarTotal('debitCards');
            _MyDebitCards();
            break;
        case 'debts':
            // Encontrar el elemento por su ID en la lista y modificarlo
            indexElemento = encontrarElementoEnLista(debts);
            debts[indexElemento].tituloElemento = inputElement[0].value;
            debts[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(debts);
            actualizarLista('debts');
            mostrarTotal('debts');
            _MyDebts();
            break;
        case 'debtors':
            // Encontrar el elemento por su ID en la lista y modificarlo
            indexElemento = encontrarElementoEnLista(debtors);
            debtors[indexElemento].tituloElemento = inputElement[0].value;
            debtors[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(debtors);
            actualizarLista('debtors');
            mostrarTotal('debtors');
            _MyDebtors();
            break;
        case 'pendings':
            // Encontrar el elemento por su ID en la lista y modificarlo
            indexElemento = encontrarElementoEnLista(pendings);
            pendings[indexElemento].tituloElemento = inputElement[0].value;
            pendings[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(pendings);
            actualizarLista('pendings');
            mostrarTotal('pendings');
            _MyPendings();
            break;
        case 'paymentDays':
            console.log('Edita pament days');
            paymentDays.firstPaymentDay = inputElement[0].value;
            // Un mes se divide en dos pagos
            if (inputElement[0].value>15) {
                paymentDays.firstPaymentDay = 15;
            } else {
                paymentDays.firstPaymentDay = inputElement[0].value;
            }
            if (inputElement[1].value>31) {
                paymentDays.secondPaymentDay = 31;
            } else {
                paymentDays.secondPaymentDay = inputElement[1].value;
            }
            // Cuando edita un valor en cualquiér lista, hay que actualizar y calcular total
            console.log(paymentDays);
            actualizarLista('paymentDays');
            mostrarTotal('paymentDays');
            _MyPaymentDay();
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
        case 'expenses':
            // crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto');
            document.getElementById("listaElementosExpenses").innerHTML = crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto', 'expenses');
            break;
        case 'debitCards':
            // crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto');
            document.getElementById("listaElementosDebitCards").innerHTML = crearJSONElementos('tarjetas.png', debitCards, '_EditaUnaTarjeta', 'EditaUnaTarjeta', 'debitCards');
            break;
        case 'debts':
            // crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto');
            document.getElementById("listaElementosDebts").innerHTML = crearJSONElementos('deudas.png', debts, '_EditaUnaDeuda', 'EditaUnaDeuda', 'debts');
            break;
        case 'debtors':
            // crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto');
            document.getElementById("listaElementosDebtors").innerHTML = crearJSONElementos('deudasafavor.png', debtors, '_EditaUnDeudor', 'EditaUnDeudor', 'debtors');
            break;
        case 'pendings':
            // crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto');
            document.getElementById("listaElementosPendings").innerHTML = crearJSONElementos('gastosfuturos.png', pendings, '_EditaUnPendiente', 'EditaUnPendiente', 'pendings');
            break;
        case 'paymentDays':
            // crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto');
            document.getElementById("firstPaymentDay").innerHTML = paymentDays.firstPaymentDay;
            if (paymentDays.secondPaymentDay >= 28) {
                document.getElementById("secondPaymentDay").innerHTML = "Last Day Of The Month";
            } else {
                document.getElementById("secondPaymentDay").innerHTML = paymentDays.secondPaymentDay;
            }
            break;
        default:
            break;
    }
}
function mostrarTotal(tipoLista){
    switch (tipoLista) {
        case 'listaSemana':
            // Suma los elementos con valor numérico de la lista y actualiza el total en el ID
            let total =     Number(listaSemana.monday) + Number(listaSemana.thuesday) + Number(listaSemana.wednesday) + Number(listaSemana.thursday) + Number(listaSemana.friday) + Number(listaSemana.saturday) + Number(listaSemana.sunday);
            document.getElementById("totalSpendOnWeek").innerHTML = total;
            break;
        case 'expenses':
            // Actualiza el total en el ID
            // sumarValores está en MovimientoDinero.js
            document.getElementById("totalMyExpenses").innerHTML = sumarValores(expenses);
            break;
        case 'debitCards':
            // Actualiza el total en el ID
            // sumarValores está en MovimientoDinero.js
            document.getElementById("totalMyDebitCards").innerHTML = sumarValores(debitCards);
            break;
        case 'debts':
            // Actualiza el total en el ID
            // sumarValores está en MovimientoDinero.js
            document.getElementById("totalMyDebts").innerHTML = sumarValores(debts);
            break;
        case 'debtors':
            // Actualiza el total en el ID
            // sumarValores está en MovimientoDinero.js
            document.getElementById("totalMyDebtors").innerHTML = sumarValores(debtors);
            break;
        case 'pendings':
            // Actualiza el total en el ID
            // sumarValores está en MovimientoDinero.js
            document.getElementById("totalMyPendings").innerHTML = sumarValores(pendings);
            break;
        default:
            break;
    }
}
function crearJSONElementos(nombreImagen, array, funcion_Edita, idFormularioEditar, nombreLista){
    let JSONElementos="";
    for (let index = 0; index < array.length; index++) {
        JSONElementos +=
        jsonElementoEnListaJSX(nombreImagen, array[index].tituloElemento, array[index].cantidadElemento, array[index].idElemento, funcion_Edita, idFormularioEditar,nombreLista);
        
    }
    return JSONElementos;
}
function jsonElementoEnListaJSX(nombreImagen, tituloElemento, cantidadElemento, idElemento, funcion_Edita, idFormularioEditar, nombreLista){  
    return `
    <div class="ElementoEnLista" id="${idElemento}">
        <div class="ContenedorImagenPrincipalElementoEnLista">
            <img src="./Imagenes/Secciones/${nombreImagen}" alt="${nombreImagen}">
        </div>
        <div class="infoElementoenLista">
            <div class="ContenedorTituloElementoEnLista">
                <span>${tituloElemento}</span>
            </div>
            <div class="ContenedorCantidadElementoEnLista">
                <span>$</span>
                <span>${cantidadElemento}</span>
            </div>
        </div>
        <div class="botonesEditarYBorrar">
            <div>
                <button onclick="${funcion_Edita}(); limpiarForm('${idFormularioEditar}'); seleccionarElemento('${nombreLista}','${idElemento}');"><img src="./Imagenes/editar-documento.png" alt="Edit"></button>
            </div>
            <div>
                <button onclick="_EliminarElemento('${idElemento}');"><img src="./Imagenes/Eliminar.png" alt="Delete"></button>
            </div>
        </div>
    </div>
    `;
}
// En construcción
function encontrarElementoEnLista(array){
    console.log('Encontrar Elemento');
    for (let index = 0; index < array.length; index++) {
        if (array[index].idElemento == seleccionElemento.elementoLista) {
            console.log(array[index]);
            return index;
        }
    }
    console.log('No Se Encontró El Elemento');
}