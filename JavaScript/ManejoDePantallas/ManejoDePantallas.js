//Este archivo manda a llamar funciones del archivo Transicion.js
let BotonAbout = document.getElementById("BotonAbout");
let BotonHome = document.getElementById("BotonHome");

// Secciones Principales
let About = document.getElementById("About");
let Formularios = document.getElementById("Formularios");
let Secciones = document.getElementById("Secciones");
let Principal = document.getElementById("Principal");
let imagenInicioAplicacion = document.getElementById("imagenInicioAplicacion");

// Secciones
let MySpendOnWeek = document.getElementById("MySpendOnWeek");
let MyExpenses = document.getElementById("MyExpenses");
let MyDebitCards = document.getElementById("MyDebitCards");
let MyDebts = document.getElementById("MyDebts");
let MyDebtors = document.getElementById("MyDebtors");
let MyPendings = document.getElementById("MyPendings");
let MyPaymentDay = document.getElementById("MyPaymentDay");

// Formularios
let EditaUnDiaDeLaSemana = document.getElementById("EditaUnDiaDeLaSemana");
let AniadeUnGasto = document.getElementById("AniadeUnGasto");
let EditaUnGasto = document.getElementById("EditaUnGasto");
let AniadeUnaTarjeta = document.getElementById("AniadeUnaTarjeta");
let EditaUnaTarjeta = document.getElementById("EditaUnaTarjeta");
let AniadeUnaDeuda = document.getElementById("AniadeUnaDeuda");
let EditaUnaDeuda = document.getElementById("EditaUnaDeuda");
let AniadeUnDeudor = document.getElementById("AniadeUnDeudor");
let EditaUnDeudor = document.getElementById("EditaUnDeudor");
let AniadeUnPendiente = document.getElementById("AniadeUnPendiente");
let EditaUnPendiente = document.getElementById("EditaUnPendiente");

// Inicio de la Aplicación
_startApp();
function _startApp(){
    _aparecer(imagenInicioAplicacion);
}

function _homeApp(){
    _desaparecer(imagenInicioAplicacion);
    _desaparecer(BotonHome);
    _desaparecer(About);
    _desaparecer(Secciones);
    _desaparecer(Formularios);

    _aparecer(BotonAbout);
    _aparecer(Principal);
}
function _aboutApp(){
    _desaparecer(BotonAbout);
    _desaparecer(Secciones);
    _desaparecer(Formularios);
    _desaparecer(Principal);

    _aparecer(BotonHome);
    _aparecer(About);
}
// Para las secciones, hay que aparecer Secciones y la sección que se desee
// Pero también hay que desaparecer las demás secciones que se aparecen cuando se aparece "Secciones"
function _mySpendOnWeek(){
    _desaparecer(Principal);
    // Lo mismo hacer para cada sección
    _aparecer(Secciones);
    _desaparecer(MyExpenses);
    _desaparecer(MyDebitCards);
    _desaparecer(MyDebts);
    _desaparecer(MyDebtors);
    _desaparecer(MyPendings);
    _desaparecer(MyPaymentDay);
    _desaparecer(Formularios);

    _aparecer(MySpendOnWeek);
}
function _MyExpenses(){
    _desaparecer(Principal);
    // Lo mismo hacer para cada sección
    _aparecer(Secciones);
    _desaparecer(MySpendOnWeek);
    _desaparecer(MyDebitCards);
    _desaparecer(MyDebts);
    _desaparecer(MyDebtors);
    _desaparecer(MyPendings);
    _desaparecer(MyPaymentDay);
    _desaparecer(Formularios);

    _aparecer(MyExpenses);
}
function _MyDebitCards(){
    _desaparecer(Principal);
    // Lo mismo hacer para cada sección
    _aparecer(Secciones);
    _desaparecer(MySpendOnWeek);
    _desaparecer(MyExpenses);
    _desaparecer(MyDebts);
    _desaparecer(MyDebtors);
    _desaparecer(MyPendings);
    _desaparecer(MyPaymentDay);
    _desaparecer(Formularios);

    _aparecer(MyDebitCards);
}
function _MyDebts(){
    _desaparecer(Principal);
    // Lo mismo hacer para cada sección
    _aparecer(Secciones);
    _desaparecer(MySpendOnWeek);
    _desaparecer(MyExpenses);
    _desaparecer(MyDebitCards);
    _desaparecer(MyDebtors);
    _desaparecer(MyPendings);
    _desaparecer(MyPaymentDay);
    _desaparecer(Formularios);

    _aparecer(MyDebts);
}
function _MyDebtors(){
    _desaparecer(Principal);
    // Lo mismo hacer para cada sección
    _aparecer(Secciones);
    _desaparecer(MySpendOnWeek);
    _desaparecer(MyExpenses);
    _desaparecer(MyDebitCards);
    _desaparecer(MyDebts);
    _desaparecer(MyPendings);
    _desaparecer(MyPaymentDay);
    _desaparecer(Formularios);

    _aparecer(MyDebtors);
}
function _MyPendings(){
    _desaparecer(Principal);
    // Lo mismo hacer para cada sección
    _aparecer(Secciones);
    _desaparecer(MySpendOnWeek);
    _desaparecer(MyExpenses);
    _desaparecer(MyDebitCards);
    _desaparecer(MyDebts);
    _desaparecer(MyDebtors);
    _desaparecer(MyPaymentDay);
    _desaparecer(Formularios);

    _aparecer(MyPendings);
}
function _MyPaymentDay(){
    _desaparecer(Principal);
    // Lo mismo hacer para cada sección
    _aparecer(Secciones);
    _desaparecer(MySpendOnWeek);
    _desaparecer(MyExpenses);
    _desaparecer(MyDebitCards);
    _desaparecer(MyDebts);
    _desaparecer(MyDebtors);
    _desaparecer(MyPendings);
    _desaparecer(Formularios);

    _aparecer(MyPaymentDay);
}
// Formularios
function _EditaUnDiaDeLaSemana(){
    _desaparecer(MySpendOnWeek);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(AniadeUnGasto);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(EditaUnDiaDeLaSemana);
}
function _AniadeUnGasto(){
    _desaparecer(MyExpenses);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(AniadeUnGasto);
}
function _EditaUnGasto(){
    _desaparecer(MyExpenses);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(AniadeUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(EditaUnGasto);
}
function _AniadeUnaTarjeta(){
    _desaparecer(MyDebitCards);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnGasto);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(AniadeUnaTarjeta);
}
function _EditaUnaTarjeta(){
    _desaparecer(MyDebitCards);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(AniadeUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(EditaUnaTarjeta);
}
function _AniadeUnaDeuda(){
    _desaparecer(MyDebts);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnGasto);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(AniadeUnaDeuda);
}
function _EditaUnaDeuda(){
    _desaparecer(MyDebts);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(AniadeUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(EditaUnaDeuda);
}
function _AniadeUnDeudor(){
    _desaparecer(MyDebtors);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnGasto);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(AniadeUnDeudor);
}
function _EditaUnDeudor(){
    _desaparecer(MyDebtors);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(AniadeUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnPendiente);
    _aparecer(EditaUnDeudor);
}
function _AniadeUnPendiente(){
    _desaparecer(MyPendings);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnGasto);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnDeudor);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnPendiente);
    _aparecer(AniadeUnPendiente);
}
function _EditaUnPendiente(){
    _desaparecer(MyPendings);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(AniadeUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnDeudor);
    _aparecer(EditaUnPendiente);
}
function _EditaDiasDePago(){
    _desaparecer(MyPaymentDay);
    _aparecer(Formularios);
    // Lo mismo hacer para cada formulario
    _desaparecer(EditaUnDiaDeLaSemana);
    _desaparecer(AniadeUnGasto);
    _desaparecer(AniadeUnaTarjeta);
    _desaparecer(EditaUnGasto);
    _desaparecer(AniadeUnaDeuda);
    _desaparecer(EditaUnaDeuda);
    _desaparecer(AniadeUnDeudor);
    _desaparecer(EditaUnaTarjeta);
    _desaparecer(AniadeUnPendiente);
    _desaparecer(EditaUnDeudor);
    _desaparecer(EditaUnPendiente);

    _aparecer(EditaDiasDePago);
}
// Eliminar Elemento
function _EliminarElemento(elemento){
    let elementoDesaparecer = document.getElementById(elemento);
    _desaparecer(elementoDesaparecer);
}
// Limpiar Form
function _limpiarForm(ID){
    let formulario = document.getElementById(ID);
    let formElement = formulario.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');
    for (let index = 0; index < inputElement.length; index++) {
        inputElement[index].value = "";
    }
}
// Mostrar Form
function _mostrarForm(idForm, idElemento){
    // Quiero que en el form se muestren los datos del elemento que se va a editar
    let formulario = document.getElementById(idForm);
    let formElement = formulario.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');
    switch (idForm) {
        case 'EditaUnDiaDeLaSemana':
            inputElement[0].value = getArray('listaSemana', idElemento);
            break;
        case 'EditaUnGasto':
            inputElement[0].value = getArray('expenses', idElemento).tituloElemento;
            inputElement[1].value = getArray('expenses', idElemento).cantidadElemento;
            break;
        case 'EditaUnaTarjeta':
            inputElement[0].value = getArray('debitCards', idElemento).tituloElemento;
            inputElement[1].value = getArray('debitCards', idElemento).cantidadElemento;
            break;
        case 'EditaUnaDeuda':
            inputElement[0].value = getArray('debts', idElemento).tituloElemento;
            inputElement[1].value = getArray('debts', idElemento).cantidadElemento;
            break;
        case 'EditaUnDeudor':
            inputElement[0].value = getArray('debtors', idElemento).tituloElemento;
            inputElement[1].value = getArray('debtors', idElemento).cantidadElemento;
            break;
        case 'EditaUnPendiente':
            inputElement[0].value = getArray('pendings', idElemento).tituloElemento;
            inputElement[1].value = getArray('pendings', idElemento).cantidadElemento;
            break;
        default:
            break;
    }
}