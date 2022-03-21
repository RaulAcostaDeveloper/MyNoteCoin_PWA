ponerPublicidad();
function ponerPublicidad() {
    let numeroRandom = Math.random() * (3 - 1) + 1;
    numeroRandom = Number(numeroRandom.toFixed(0));
    console.log('Poner publicidad ' + numeroRandom);
    switch (numeroRandom) {
        case 1:
            console.log('publicidad 1');
            let publicidad1 = document.getElementById("publicidad1");
            publicidad1.style.display="flex";
            break;
        case 2:
            console.log('publicidad 2');
            let publicidad2 = document.getElementById("publicidad2");
            publicidad2.style.display="flex";
            break;
        case 3:
            console.log('publicidad 3');
            let publicidad3 = document.getElementById("publicidad3");
            publicidad3.style.display="flex";
            break;
        default:
            break;
    }
}