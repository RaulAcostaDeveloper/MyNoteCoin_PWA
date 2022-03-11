// Listas
// Pendiente traer valores de Local Storage
let listaSemana = enviaDataLocalStorage('listaSemanaLocalStorage');
// tituloElemento: inputElement[0].value,
// cantidadElemento:inputElement[0].value,
// idElemento: 'debtors'+idDebtors
let expenses = enviaDataLocalStorage('expensesLocalStorage');
let idExpenses = enviaDataLocalStorage('idExpensesLocalStorage');
let debitCards = enviaDataLocalStorage('debitCardsLocalStorage');
let idDebitCards = enviaDataLocalStorage('idDebitCardsLocalStorage');
let debts = enviaDataLocalStorage('debtsLocalStorage');
let idDebts = enviaDataLocalStorage('idDebtsLocalStorage');
let debtors = enviaDataLocalStorage('debtorsLocalStorage');
let idDebtors = enviaDataLocalStorage('idDebtorsLocalStorage');
let pendings = enviaDataLocalStorage('pendingsLocalStorage');
let idPendings = enviaDataLocalStorage('idPendingsLocalStorage');
let paymentDays = {
    firstPaymentDay:15,
    secondPaymentDay:31
};
// Objetos de contról
let seleccionElemento = {
    tipoLista : "",
    elementoLista : "",
};
let diasRestantesQuincena = calculaDiasRestantesParaQuincena();

// Inicio de aplicación
// Que tarde .300 seg para que de tiempo de cargar todas las funciones usadas
setTimeout(() => {
    actualizarListasYMostrarTotalListas();
}, 300);

function actualizarListasYMostrarTotalListas(){
    actualizarLista('listaSemana');
    mostrarTotal('listaSemana');
    actualizarLista('expenses');
    mostrarTotal('expenses');
    actualizarLista('debitCards');
    mostrarTotal('debitCards');
    actualizarLista('debts');
    mostrarTotal('debts');
    actualizarLista('debtors');
    mostrarTotal('debtors');
    actualizarLista('pendings');
    mostrarTotal('pendings');
    actualizarLista('paymentDays');
}
function aniadirElementosDePruebaAListas(){
    for (let index = 0; index < 5; index++) {
        idExpenses++;
        expenses.push({
            tituloElemento: 'Titulo Expenses ' + idExpenses,
            cantidadElemento: 100,
            idElemento: 'expenses'+idExpenses
        });

        idDebitCards++;
        debitCards.push({
            tituloElemento: 'Titulo Debit Cards ' + idDebitCards,
            cantidadElemento: 100,
            idElemento: 'debitCards'+idDebitCards
        });

        idDebts++;
        debts.push({
            tituloElemento: 'Titulo Debit Cards ' + idDebts,
            cantidadElemento: 100,
            idElemento: 'debts'+idDebts
        });

        idDebtors++;
        debtors.push({
            tituloElemento: 'Titulo Debit Cards ' + idDebtors,
            cantidadElemento: 100,
            idElemento: 'debtors'+idDebtors
        });

        idPendings++;
        pendings.push({
            tituloElemento: 'Titulo Debit Cards ' + idPendings,
            cantidadElemento: 100,
            idElemento: 'pendings'+idPendings
        });
    }
    

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
            actualizaElementoLocalStorage('expensesLocalStorage', expenses);
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
            actualizaElementoLocalStorage('debitCardsLocalStorage', debitCards);
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
            actualizaElementoLocalStorage('debtsLocalStorage', debts);
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
            actualizaElementoLocalStorage('debtorsLocalStorage', debtors);
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
            actualizaElementoLocalStorage('pendingsLocalStorage', pendings);
            actualizarLista('pendings');
            mostrarTotal('pendings');
            _MyPendings();//De ManejoDePantallas.js
            break;
        default:
            break;
    }
    
    console.log('Valores Nuevos: ' + inputElement[0].value + " " + inputElement[1].value);
    // Al añadir, editar o borrar un elemento, es necesario volver a calular todo
    calculaCantidades(); //De MovimientosDinero.js
    actualizarVistaCantidadesInicio(); //De MovimientosDinero.js
}
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
            actualizaElementoLocalStorage('listaSemanaLocalStorage', listaSemana);
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
            actualizaElementoLocalStorage('expensesLocalStorage', expenses);
            actualizarLista('expenses');
            mostrarTotal('expenses');
            _MyExpenses();
            break;
        case 'debitCards':
            indexElemento = encontrarElementoEnLista(debitCards);
            debitCards[indexElemento].tituloElemento = inputElement[0].value;
            debitCards[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(debitCards);
            actualizaElementoLocalStorage('debitCardsLocalStorage', debitCards);
            actualizarLista('debitCards');
            mostrarTotal('debitCards');
            _MyDebitCards();
            break;
        case 'debts':
            indexElemento = encontrarElementoEnLista(debts);
            debts[indexElemento].tituloElemento = inputElement[0].value;
            debts[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(debts);
            actualizaElementoLocalStorage('debtsLocalStorage', debts);
            actualizarLista('debts');
            mostrarTotal('debts');
            _MyDebts();
            break;
        case 'debtors':
            indexElemento = encontrarElementoEnLista(debtors);
            debtors[indexElemento].tituloElemento = inputElement[0].value;
            debtors[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(debtors);
            actualizaElementoLocalStorage('debtorsLocalStorage', debtors);
            actualizarLista('debtors');
            mostrarTotal('debtors');
            _MyDebtors();
            break;
        case 'pendings':
            indexElemento = encontrarElementoEnLista(pendings);
            pendings[indexElemento].tituloElemento = inputElement[0].value;
            pendings[indexElemento].cantidadElemento = inputElement[1].value;
            console.log(pendings);
            actualizaElementoLocalStorage('pendingsLocalStorage', pendings);
            actualizarLista('pendings');
            mostrarTotal('pendings');
            _MyPendings();
            break;
        default:
            break;
    }
    // Al añadir, editar o borrar un elemento, es necesario volver a calular todo
    calculaCantidades(); //De MovimientosDinero.js
    actualizarVistaCantidadesInicio(); //De MovimientosDinero.js
}
function eliminarElementoEnLista(){
    console.log('Eliminar elemento ' + seleccionElemento.elementoLista);
    switch (seleccionElemento.tipoLista) {
        case 'expenses':
            // Borra un objeto de la lista, cuyo id es el que obtiene de la función encontrarElementoEnLista();
            // El SetTimeOut es para que de tiempo a la animación de aparecer
            expenses.splice(encontrarElementoEnLista(expenses),1);
            actualizaElementoLocalStorage('expensesLocalStorage', expenses);
            setTimeout(() => {
                actualizarLista('expenses');
                mostrarTotal('expenses');
            }, 500);
            break;
        case 'debitCards':
            debitCards.splice(encontrarElementoEnLista(debitCards),1);
            actualizaElementoLocalStorage('debitCardsLocalStorage', debitCards);
            setTimeout(() => {
                actualizarLista('debitCards');
                mostrarTotal('debitCards');
            }, 500);
            break;
        case 'debts':
            debts.splice(encontrarElementoEnLista(debts),1);
            actualizaElementoLocalStorage('debtsLocalStorage', debts);
            setTimeout(() => {
                actualizarLista('debts');
                mostrarTotal('debts');
            }, 500);
            break;
        case 'debtors':
            debtors.splice(encontrarElementoEnLista(debtors),1);
            actualizaElementoLocalStorage('debtorsLocalStorage', debtors);
            setTimeout(() => {
                actualizarLista('debtors');
                mostrarTotal('debtors');
            }, 500);
            break;
        case 'pendings':
            pendings.splice(encontrarElementoEnLista(pendings),1);
            actualizaElementoLocalStorage('pendingsLocalStorage', pendings);
            setTimeout(() => {
                actualizarLista('pendings');
                mostrarTotal('pendings');
            }, 500);
            break;
        default:
            break;
    }
    // Al añadir, editar o borrar un elemento, es necesario volver a calular todo
    calculaCantidades(); //De MovimientosDinero.js
    actualizarVistaCantidadesInicio(); //De MovimientosDinero.js
}
function actualizarLista(tipoLista){
    // Asigna los valores de la lista en el html
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
        case 'expenses':
            // crearJSONElementos(nombreImagen, array, funcion_Edita, idFormularioEditar, nombreLista){}
            document.getElementById("listaElementosExpenses").innerHTML = crearJSONElementos('gastos.png', expenses, '_EditaUnGasto', 'EditaUnGasto', 'expenses');
            break;
        case 'debitCards':
            document.getElementById("listaElementosDebitCards").innerHTML = crearJSONElementos('tarjetas.png', debitCards, '_EditaUnaTarjeta', 'EditaUnaTarjeta', 'debitCards');
            break;
        case 'debts':
            document.getElementById("listaElementosDebts").innerHTML = crearJSONElementos('deudas.png', debts, '_EditaUnaDeuda', 'EditaUnaDeuda', 'debts');
            break;
        case 'debtors':
            document.getElementById("listaElementosDebtors").innerHTML = crearJSONElementos('deudasafavor.png', debtors, '_EditaUnDeudor', 'EditaUnDeudor', 'debtors');
            break;
        case 'pendings':
            document.getElementById("listaElementosPendings").innerHTML = crearJSONElementos('gastosfuturos.png', pendings, '_EditaUnPendiente', 'EditaUnPendiente', 'pendings');
            break;
        case 'paymentDays':
            document.getElementById("diasRestantes").innerHTML = diasRestantesQuincena;
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
            document.getElementById("totalMyDebitCards").innerHTML = sumarValores(debitCards);
            break;
        case 'debts':
            document.getElementById("totalMyDebts").innerHTML = sumarValores(debts);
            break;
        case 'debtors':
            document.getElementById("totalMyDebtors").innerHTML = sumarValores(debtors);
            break;
        case 'pendings':
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
            <div title="Edit">
                <button onclick="${funcion_Edita}(); limpiarForm('${idFormularioEditar}'); seleccionarElemento('${nombreLista}','${idElemento}'); reproducirClick();"><img src="./Imagenes/editar-documento.png" alt="Edit"></button>
            </div>
            <div title="Delete">
                <button onclick="_EliminarElemento('${idElemento}'); seleccionarElemento('${nombreLista}','${idElemento}'); eliminarElementoEnLista(); reproducirPop();"><img src="./Imagenes/Eliminar.png" alt="Delete"></button>
            </div>
        </div>
    </div>
    `;
}
function encontrarElementoEnLista(array){
    // Retorna el index del elemento seleccionado en la lista que se le indica
    for (let index = 0; index < array.length; index++) {
        if (array[index].idElemento == seleccionElemento.elementoLista) {
            return index;
        }
    }
    console.log('No Se Encontró El Elemento');
}
//Solo actualiza la variable
function calculaDiasRestantesParaQuincena(){
    //Obtener días restantes para la quincena
    //Siempre se va a ejecutar al iniciar la aplicación
    let diasRestantesQuincena = 0;
    let fecha = new Date();
    let ultimoDiaFecha = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
    let ultimoDiaMes = ultimoDiaFecha.getDate();
    let diaDelMesActual = fecha.getDate();

    if(diaDelMesActual < 15){
        diasRestantesQuincena = 15 - diaDelMesActual;
    } else if(diaDelMesActual > 15){
        diasRestantesQuincena = ultimoDiaMes - diaDelMesActual;
    } else if(diaDelMesActual == 15){
        diasRestantesQuincena = 1;
    } else if(diaDelMesActual == ultimoDiaMes) {
        diasRestantesQuincena = 1;
    } else {
        console.log("Error en días Restantes Quincena");
        diasRestantesQuincena = 1;
    }
    return diasRestantesQuincena;
}