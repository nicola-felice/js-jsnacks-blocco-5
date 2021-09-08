// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


let zucchine = [
    {
        "varietà" : "Zucchino nero di Milano",
        "pesoINGrammi" : 200,
        "lunghezzaIncm" : 20
    },
    {
        "varietà" : "Zucchino romanesco",
        "pesoINGrammi" : 146,
        "lunghezzaIncm" : 10
    },
    {
        "varietà" : "Zucchino ortolano di Faenza",
        "pesoINGrammi" : 273,
        "lunghezzaIncm" : 22
    },
    {
        "varietà" : "Zucchino nero di Milano",
        "pesoINGrammi" : 238,
        "lunghezzaIncm" : 15
    },
    {
        "varietà" : "Zucchina lunga fiorentina",
        "pesoINGrammi" : 180,
        "lunghezzaIncm" : 38
    },
    {
        "varietà" : "Zucchino siciliano",
        "pesoINGrammi" : 125,
        "lunghezzaIncm" : 7
    },
    {
        "varietà" : "Zucchino nero di Milano",
        "pesoINGrammi" : 50,
        "lunghezzaIncm" : 30
    },
    {
        "varietà" : "Zucchino siciliano",
        "pesoINGrammi" : 283,
        "lunghezzaIncm" : 13
    },
    {
        "varietà" : "Zucchina striata di Napoli",
        "pesoINGrammi" : 200,
        "lunghezzaIncm" : 25
    },
    {
        "varietà" : "Zucchino nero di Milano",
        "pesoINGrammi" : 70,
        "lunghezzaIncm" : 13
    }
];


const listaZucchineLunghe = [];
const listaZucchineCorte = [];

for ( let i = 0; i < zucchine.length; i++ ) {

    if ( zucchine[i].lunghezzaIncm >= 15 ) {
        listaZucchineLunghe.push(zucchine[i]);
    } else {
        listaZucchineCorte.push(zucchine[i]);
    }
}


let pesoTotZucchineCorte = 0;
let pesoTotZucchineLunghe = 0;

for ( let i = 0; i < zucchine.length; i++ ) {

    if ( listaZucchineCorte.includes(zucchine[i]) ) {
        pesoTotZucchineCorte += zucchine[i].pesoINGrammi;
    } else {
        pesoTotZucchineLunghe += zucchine[i].pesoINGrammi;
    }
}

console.log(`le zucchine più corte di 15 cm sono:`, listaZucchineCorte);
console.log(`le zucchine più lunghe di 15 cm sono:`, listaZucchineLunghe);

console.log(`Il peso totale delle zucchine lunghe è: ${pesoTotZucchineLunghe} g`);
console.log(`Il peso totale delle zucchine corte è: ${pesoTotZucchineCorte} g`);
