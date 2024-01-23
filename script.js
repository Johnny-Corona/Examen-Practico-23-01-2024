var n1 = parseInt(prompt("Inserta un número"));
var n2 = parseInt(prompt("Inserta otro número"));
var n3 = parseInt(prompt("Inserta el último número"));

function Diferente() {


    if ((n1 === n2) && (n2 === n3) && (n1 === n3)) {
        console.log("todos los numero son iguales");

    } else if (!(n1 === n2 && n2 === n3 && n1 === n3)) {

        console.log("los numeros son distintos");

    }

}



function Menor() {



    if (n1 <= n2 && n1 <= n3) {
        console.log("El menor es " + n1);
    } else {
        if (n2 < n1 && n2 <= n3) {
            console.log("El menor es " + n2);
        } else {
            console.log("El menor es " + n3);
        }
    }
}



function MayorDeTres() {

    if (n1 > n2 && n1 > n3) {

        console.log("El mayor es el numero : " + n1);
    } else {
        if (n2 > n1 && n2 > n3) {
            console.log("El mayor es el numero : " + n2);
        } else {
            console.log("El mayor es  el numero : " + n3);
        }
    }
}




function Media() {



    var suma = ((n1 + n2 + n3) / 3);
    var media = suma;
    console.log("la media es : " + media);

}






