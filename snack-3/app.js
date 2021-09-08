// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


function revertString(str) {

    let NewStringReverse = str.split("").reverse().join("");

    return NewStringReverse;
}


console.log( revertString("bello") )