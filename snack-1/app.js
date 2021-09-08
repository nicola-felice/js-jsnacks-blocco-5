// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


let zucchine = [
    {
        "varietà" : "Zucchino nero di Milano",
        "pesoINGrammi" : 200,
        "lunghezzaIncm" : 20
    },
    {
        "varietà" : "Zucchino romanesco",
        "pesoINGrammi" : 146,
        "lunghezzaIncm" : 25
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
        "lunghezzaIncm" : 50
    },
    {
        "varietà" : "Zucchino nero di Milano",
        "pesoINGrammi" : 50,
        "lunghezzaIncm" : 30
    },
    {
        "varietà" : "Zucchino siciliano",
        "pesoINGrammi" : 283,
        "lunghezzaIncm" : 20
    },
    {
        "varietà" : "Zucchina striata di Napoli",
        "pesoINGrammi" : 200,
        "lunghezzaIncm" : 25
    },
    {
        "varietà" : "Zucchino nero di Milano",
        "pesoINGrammi" : 70,
        "lunghezzaIncm" : 25
    }
];

let pesoTot = 0;
for ( let i = 0; i < zucchine.length; i++ ) {

    pesoTot += zucchine[i].pesoINGrammi;
}

console.log(`Il peso totale delle zucchine è: ${pesoTot} g`);



