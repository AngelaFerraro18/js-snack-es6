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
        nome: 'Rose Ultimate',
        peso: 5
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


// creo una variabile dove immetto un valore minimo di partenza
let minValue = bicicles[0];

// creo un ciclo for per trovare il valore minimo e inserirlo nell'array vuoto
for ( let i = 0; i < bicicles.length; i++){

   if(minValue.peso > bicicles[i].peso){
 
        minValue = bicicles[i];
       
    } 

};

const answerElement = document.getElementById('answer');


answerElement.innerText = `La bici dal peso più leggero è la bici ${minValue.nome} dal peso di ${minValue.peso} kg.`;



