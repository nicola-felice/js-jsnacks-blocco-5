// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


function revertString(str) {

    // controlla se il valore passato è una stringa
    if ( !(typeof str === typeof str.toString()) ) {
        return null;
    }

    let NewStringReverse = str.split("").reverse().join("");

    return NewStringReverse;
}


console.log( revertString("ciao") );
console.log( revertString("12345") );
console.log( revertString(12345) );