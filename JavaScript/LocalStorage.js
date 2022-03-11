// localStorage.clear(); //AQUI BORRA STORAGE

let myCashLocalStorage = 3500;
let listaSemanaLocalStorage = { monday:0, thuesday:0, wednesday:0, thursday:0, friday:0, saturday:0, sunday:0 };
let expensesLocalStorage = [];
let idExpensesLocalStorage = 0;
let debitCardsLocalStorage = [];
let idDebitCardsLocalStorage = 0;
let debtsLocalStorage = [];
let idDebtsLocalStorage = 0;
let debtorsLocalStorage = [];
let idDebtorsLocalStorage = 0;
let pendingsLocalStorage = [];
let idPendingsLocalStorage = 0;
// Busca en Local Storage y actualiza las variables
recuperaDatosDeLocalStorage('myCashLocalStorage');
recuperaDatosDeLocalStorage('listaSemanaLocalStorage');
recuperaDatosDeLocalStorage('expensesLocalStorage');
recuperaDatosDeLocalStorage('debitCardsLocalStorage');
recuperaDatosDeLocalStorage('debtsLocalStorage');
recuperaDatosDeLocalStorage('debtorsLocalStorage');
recuperaDatosDeLocalStorage('pendingsLocalStorage');
function recuperaDatosDeLocalStorage(elemento) {

    //Solo asigna si hay algo en storage
    if (localStorage.getItem(elemento) != null) {
        switch (elemento) {
            case 'myCashLocalStorage':
                myCashLocalStorage = Number(localStorage.getItem('myCashLocalStorage'));
                break;
            case 'listaSemanaLocalStorage':
                listaSemanaLocalStorage = JSON.parse(localStorage.getItem('listaSemanaLocalStorage'));
                break;
            case 'expensesLocalStorage':
                expensesLocalStorage = JSON.parse(localStorage.getItem("expensesLocalStorage"));
                idExpensesLocalStorage = Number(localStorage.getItem("idExpensesLocalStorage"));
                break;
            case 'debitCardsLocalStorage':
                debitCardsLocalStorage = JSON.parse(localStorage.getItem("debitCardsLocalStorage"));
                idDebitCardsLocalStorage = Number(localStorage.getItem("idDebitCardsLocalStorage"));
                break;
            case 'debtsLocalStorage':
                debtsLocalStorage = JSON.parse(localStorage.getItem("debtsLocalStorage"));
                idDebtsLocalStorage = Number(localStorage.getItem("idDebtsLocalStorage"));
                break;
            case 'debtorsLocalStorage':
                debtorsLocalStorage = JSON.parse(localStorage.getItem("debtorsLocalStorage"));
                idDebtorsLocalStorage = Number(localStorage.getItem("idDebtorsLocalStorage"));
                break;
            case 'pendingsLocalStorage':
                pendingsLocalStorage = JSON.parse(localStorage.getItem("pendingsLocalStorage"));
                idPendingsLocalStorage = Number(localStorage.getItem("idPendingsLocalStorage"));
                break;
            default:
                break;
        }
    }
}
//Retorna los datos de Local Storage a donde se llamen
function enviaDataLocalStorage(elemento) {
    switch (elemento) {
      case "myCashLocalStorage":
        return myCashLocalStorage;
      case "listaSemanaLocalStorage":
        return listaSemanaLocalStorage;
      case "expensesLocalStorage":
        return expensesLocalStorage;
      case "idExpensesLocalStorage":
        return idExpensesLocalStorage;
      case "debitCardsLocalStorage":
        return debitCardsLocalStorage;
      case "idDebitCardsLocalStorage":
        return idDebitCardsLocalStorage;
      case "debtsLocalStorage":
        return debtsLocalStorage;
      case "idDebtsLocalStorage":
        return idDebtsLocalStorage;
      case "debtorsLocalStorage":
        return debtorsLocalStorage;
      case "idDebtorsLocalStorage":
        return idDebtorsLocalStorage;
      case "pendingsLocalStorage":
        return pendingsLocalStorage;
      case "idPendingsLocalStorage":
        return idPendingsLocalStorage;
      default:
        console.log("No se encuentra la variable en Local Storage");
        break;
    }
}
function actualizaElementoLocalStorage(elemento, data) {
    switch (elemento) {
        case "myCashLocalStorage":
            myCashLocalStorage = data;
            localStorage.setItem("myCashLocalStorage", Number(myCashLocalStorage));
            break;
        case "listaSemanaLocalStorage":
            listaSemanaLocalStorage = data;
            localStorage.setItem("listaSemanaLocalStorage", JSON.stringify(listaSemanaLocalStorage));
            break;
        case "expensesLocalStorage":
            expensesLocalStorage = data;
            localStorage.setItem("expensesLocalStorage", JSON.stringify(expensesLocalStorage));
            break;
        case "idExpensesLocalStorage":
            idExpensesLocalStorage = data;
            localStorage.setItem("idExpensesLocalStorage", Number(idExpensesLocalStorage));
            break;
        case "debitCardsLocalStorage":
            debitCardsLocalStorage = data;
            localStorage.setItem("debitCardsLocalStorage", JSON.stringify(debitCardsLocalStorage));
            break;
        case "idDebitCardsLocalStorage":
            idDebitCardsLocalStorage = data;
            localStorage.setItem("idDebitCardsLocalStorage", Number(idDebitCardsLocalStorage));
            break;
        case "debtsLocalStorage":
            debtsLocalStorage = data;
            localStorage.setItem("debtsLocalStorage", JSON.stringify(debtsLocalStorage));
        case "idDebtsLocalStorage":
            idDebtsLocalStorage = data;
            localStorage.setItem("idDebtsLocalStorage", Number(idDebtsLocalStorage));
            break;
        case "debtorsLocalStorage":
            debtorsLocalStorage = data;
            localStorage.setItem("debtorsLocalStorage", JSON.stringify(debtorsLocalStorage));
            break;
        case "idDebtorsLocalStorage":
            idDebtorsLocalStorage = data;
            localStorage.setItem("idDebtorsLocalStorage", Number(idDebtorsLocalStorage));
            break;
        case "pendingsLocalStorage":
            pendingsLocalStorage = data;
            localStorage.setItem("pendingsLocalStorage", JSON.stringify(pendingsLocalStorage));
            break;
        case "idPendingsLocalStorage":
            idPendingsLocalStorage = data;
            localStorage.setItem("idPendingsLocalStorage", Number(idPendingsLocalStorage));
            break;
        default:
        console.log("No se encuentra la variable " + elemento + " en Local Storage");
        break;
    }    
}