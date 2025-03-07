/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


//creo un array al cui interno inserisco degli oggetti
const bicicles = [
    {
        nome: 'Canyon Ultimate',
        peso: 6 
    },
    {
        nome: 'Rose X-Lite',
        peso: 7
    },
    {
        nome: 'Colnago',
        peso: 2
    }
];

// console.log(bicicles.length); //--> lunghezza array
// console.log(bicicles); // --> stampa array
// console.log(bicicles[0]); // --> stampa primo elemento in array
// console.log(bicicles[0].peso); // --> stampa la chiave 'peso' dell'oggetto contenuto nell'array

// creo un array vuoto dove andrò a inserire il valore del peso minore
let lesserWeight;

// creo una variabile dove immetto un valore minimo di partenza
let minValue = bicicles[0];

// creo un ciclo for per trovare il valore minimo e inserirlo nell'array vuoto
for ( let i = 0; i < bicicles.length; i++){

   if(minValue.peso > bicicles[i].peso){
        console.log(bicicles[i].peso);
        lesserWeight = bicicles[i];
    }

}console.log(lesserWeight);

const answerElement = document.getElementById('answer');
console.log(answerElement);

answerElement.innerText = `La bici dal peso più leggero è la bici ${lesserWeight.nome} dal peso di ${lesserWeight.peso} kg.`;



