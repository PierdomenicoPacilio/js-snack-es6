//             Snack Array e Oggetti


// Snack 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikeList = [
    { name: "Speedy Gonzales", weight: 8.2 },
    { name: "Turbo Racer", weight: 7.5 },
    { name: "Lightning Bolt", weight: 9.0 },
    { name: "Zoomer", weight: 6.8 },
    { name: "Flash Rider", weight: 8.1 },
    { name: "Breeze Master", weight: 7.2 },
    { name: "Wind Chaser", weight: 8.5 },
    { name: "Rapid Fire", weight: 7.9 },
    { name: "Swift Runner", weight: 6.5 },
    { name: "Nitro Speedster", weight: 7.7 }
];


for(i = 0; i < bikeList.length; i++) console.log(bikeList[i]);


const whoTheLightest = function(array) {
    let lightestName = '';
    let currentName = '';
    let lightestValue = 0;
    let currentValue = 0;
    for(i = 0; i < array.length; i++){
        currentName = array[i].name;
        currentValue = array[i].weight;
        if (lightestValue === 0){
            lightestValue = currentValue;
            lightestName = currentName;
        } else if(lightestValue > currentValue) {
            lightestValue = currentValue;
            lightestName = currentName;
        };
    };
    return `la più leggera è ${lightestName} con ${lightestValue}Kg`;
};

console.log(whoTheLightest(bikeList));
document.getElementById('bike').innerText = `${whoTheLightest(bikeList)}`

// Snack2

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teamList = [
  { name: "Juventus", power: 10, foulsConceded: 0, points: 0 },
  { name: "Inter", power: 10, foulsConceded: 0, points: 0 },
  { name: "Milan", power: 9, foulsConceded: 0, points: 0 },
  { name: "Roma", power: 7, foulsConceded: 0, points: 0 },
  { name: "Napoli", power: 9, foulsConceded: 0, points: 0 },
  { name: "Lazio", power: 7, foulsConceded: 0, points: 0 },
  { name: "Atalanta", power: 8, foulsConceded: 0, points: 0 },
  { name: "Fiorentina", power: 6, foulsConceded: 0, points: 0 },
  { name: "Parma", power: 4, foulsConceded: 0, points: 0 },
  { name: "Torino", power: 5, foulsConceded: 0, points: 0 },
  { name: "Bologna", power: 6, foulsConceded: 0, points: 0 },
  { name: "Venezia", power: 2, foulsConceded: 0, points: 0 },
  { name: "Empoli", power: 2, foulsConceded: 0, points: 0 },
  { name: "Udinese", power: 5, foulsConceded: 0, points: 0 },
  { name: "Monza", power: 3, foulsConceded: 0, points: 0 },
  { name: "Como", power: 4, foulsConceded: 0, points: 0 },
  { name: "Lecce", power: 1, foulsConceded: 0, points: 0 },
  { name: "Verona", power: 1, foulsConceded: 0, points: 0 },
  { name: "Genoa", power: 3, foulsConceded: 0, points: 0 },
  { name: "Cagliari", power: 1, foulsConceded: 0, points: 0 }
];

const serieALeague = function(array) {
    for (i = 0; i < array.length; i++) {
        const currentTeam = array[i];
        for (ii = 0; ii < array.length; ii++) {
            if (ii !== i) {
                if (currentTeam.power > array[ii].power) {
                    const randomNumResult = Math.floor(Math.random() * 4) + 1;
                    const firstRandomNumFouls = Math.floor(Math.random() * 10) + 1;
                    const secondRandomNumFouls = Math.floor(Math.random() * 10) + 1;
                    currentTeam.foulsConceded += firstRandomNumFouls;
                    array[ii].foulsConceded += secondRandomNumFouls;
                    if (randomNumResult < 3) {
                        currentTeam.points += 3;
                    } else if (randomNumResult === 3) {
                        currentTeam.points += 1;
                        array[ii].points += 1;
                    } else {
                        array[ii].points += 3;
                    };
                } else if (currentTeam.power < array[ii].power) {
                    const randomNumResult = Math.floor(Math.random() * 4) + 1;
                    const firstRandomNumFouls = Math.floor(Math.random() * 10) + 1;
                    const secondRandomNumFouls = Math.floor(Math.random() * 10) + 1;
                    currentTeam.foulsConceded += firstRandomNumFouls;
                    array[ii].foulsConceded += secondRandomNumFouls;
                    if (randomNumResult < 3) {
                        array[ii].points += 3;
                    } else if (randomNumResult === 3) {
                        currentTeam.points += 1;
                        array[ii].points += 1;
                    } else {
                        currentTeam.points += 3;
                    };
                } else {
                    const randomNumResult = Math.floor(Math.random() * 3) + 1;
                    const firstRandomNumFouls = Math.floor(Math.random() * 10) + 1;
                    const secondRandomNumFouls = Math.floor(Math.random() * 10) + 1;
                    currentTeam.foulsConceded += firstRandomNumFouls;
                    array[ii].foulsConceded += secondRandomNumFouls;
                    if (randomNumResult === 1) {
                        array[ii].points += 3;
                    } else if (randomNumResult === 2) {
                        currentTeam.points += 1;
                        array[ii].points += 1;
                    } else {
                        currentTeam.points += 3;
                    };
                };
            };
        };
    };
    array.sort((a, b) => b.points - a.points);
};

document.getElementById('rankingBtn').addEventListener('click', function(){
    document.getElementById('rankingBtn').classList.add('d-none');
    document.getElementById('ranking').classList.remove('d-none');
    serieALeague(teamList);
    console.log(teamList)
    for (i = 0; i < teamList.length; i++) {
        document.getElementById('ranking').innerHTML +=`<div class="row col-12 p-0">
                                                        <div class="col-8 bg-primary-subtle text-primary-emphasis">
                                                            ${teamList[i].name}
                                                        </div>
                                                        <div class="col-2 bg-warning-subtle text-warning-emphasis">
                                                            ${teamList[i].foulsConceded}
                                                        </div>
                                                        <div class="col-2 bg-success-subtle text-success-emphasis">
                                                            ${teamList[i].points}
                                                        </div>
                                                     </div>`;
    };
});