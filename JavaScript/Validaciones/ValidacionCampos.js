function valideKey(evt){
    // code is the decimal ASCII representation of the pressed key.
    // Solo aceptará que se aprieten teclas de números del 0 al 9
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
 }

 function longitudDiasDePago(evt, PaymentDayId){
    var code = (evt.which) ? evt.which : evt.keyCode;
    let diaDePago = document.getElementById(PaymentDayId).value;
 
    if(code==8 || code>=48 && code<=57 && diaDePago.length < 2) { // backspace.
      return true;
    } else {
        return false;
    }
 }

 function limpiarForm(ID){
     console.log('limpiarForm ' + ID);
    let formulario = document.getElementById(ID);
    let formElement = formulario.querySelector('form');
    let inputElement = formElement.querySelectorAll('input');
    for (let index = 0; index < inputElement.length; index++) {
        inputElement[index].value = "";
    }
}