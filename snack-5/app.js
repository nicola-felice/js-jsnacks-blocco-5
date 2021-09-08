// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”


const arrayProva = [1,2,3,4,5,6,7,8,9];

// date posizione iniziale e finale e un array
// restituisce una porzione di array, partendo dalla posizionoe iniziale fino alla posizione finale (comprese)
function cutArray(posIniziale, posFinale, array) {

    if ( posFinale > array.length || posFinale < 0 ) {
        // la posizione finale non è valida
        return null;
    } else if ( posIniziale < 0 || posIniziale > array.length ) {
        // la posizione iniziale non è valida
        return null;
    } else if ( posFinale < posIniziale ) {
        return null;
    }


    let newArray =[];

    for ( let i = posIniziale - 1; i <= posFinale - 1; i++ ) {
        newArray.push( array[i] );
    }

    return newArray;
}


// input: array of numbers
// output: a string with the numbers list
function printListOfNumbers(arrayOfNumbers) {

    let stringListNumbers = "";

    for (let i = 0; i < arrayOfNumbers.length; i++) {
    
        stringListNumbers += `${arrayOfNumbers[i]}`;
    
        if ( i != (arrayOfNumbers.length - 1) ) {
            stringListNumbers += ` _ `;
        }
    }
    
    return stringListNumbers;
}



alert(`l'array di partenza è:  ${printListOfNumbers(arrayProva)}`);


let posizioneIniziale = parseInt(prompt(`inserisci la posizione iniziale`));

while ( isNaN(posizioneIniziale) ) {
    posizioneIniziale = parseInt(prompt(`Attenzione!! inserisci la posizione iniziale come numero`));
}

let posizioneFinale = parseInt(prompt(`inserisci la posizione finale`));

while ( isNaN(posizioneFinale) ) {
    posizioneFinale = parseInt(prompt(`Attenzione!! inserisci la posizione finale come numero`));
}


let newArray = cutArray(posizioneIniziale, posizioneFinale, arrayProva);

if ( newArray == null ) {
    alert(`i dati inseriti non sono validi`);
} else {
    alert(`l'array ottenuto è:  ${printListOfNumbers(newArray)}`);
}