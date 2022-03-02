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