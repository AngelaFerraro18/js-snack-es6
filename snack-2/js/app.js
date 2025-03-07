/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

//creo un array di oggetti
const footballTeams = [
    {
        nome: 'Sampdoria',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Genoa',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan', 
        punti: 0,
        falliSubiti: 0
    }
]


//genero un ciclo for per andare a sostituire gli 0 della chiave punti con un numero randomico
for (let i = 0; i < footballTeams.length; i++){

    footballTeams[i].punti = Math.floor(Math.random() * 100) + 1;
    console.log(footballTeams[i].punti);

    footballTeams[i].falliSubiti = Math.floor(Math.random() * 50) + 1;
   
};

//creo un array vuoto
let newArrayTeams = [];

//creo un ciclo for per creare degli oggetti dove raggruppo il nome della squadra e i falli che ha subito
for (let i = 0; i < footballTeams.length; i++){

    let teamResume = {
        nome: footballTeams[i].nome,
        falliSubiti: footballTeams[i].falliSubiti
    }
    // metto i dati raccolti nell'array creato in precedenza
    newArrayTeams.push(teamResume);

}console.log(newArrayTeams);


//vado a creare una variabile dove salvo il valore della lista creata in html
const overviewFootballElement = document.getElementById('overview-football-teams');

//creo un ciclo for dove creo elementi li da inserire in ul
for (let i = 0; i < newArrayTeams.length; i++){

    const listElement = document.createElement('li');

    //in ogni li andrò a scrivere il nome della squadra e i falli subiti
    listElement.innerText = `Squadra: ${newArrayTeams[i].nome}
    Falli subiti: ${newArrayTeams[i].falliSubiti}`;

    //collego ul con li
    overviewFootballElement.appendChild(listElement);
}
