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





















// Snack2

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.