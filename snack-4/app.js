// Scrivi una funzione che fonda due array (aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const array1 = [1,2,3,4,5,6,7,8];
const array2 = ["a","b","c","d"];

function fondiArray(array1, array2) {

    let numElementiMaggiore;

    if ( array1.length > array2.length ) {
        numElementiMaggiore = array1.length;
    } else {
        numElementiMaggiore = array2.length;
    }

    let arrayFuso = []; 

    for ( let i = 0; i < numElementiMaggiore; i++ ) {

        if ( array1[i] != undefined ) {
            arrayFuso.push( array1[i] );
        }

        if ( array2[i] != undefined ) {
            arrayFuso.push( array2[i] );
        }
    }

    return arrayFuso;
}

console.log( fondiArray(array1, array2) ); 