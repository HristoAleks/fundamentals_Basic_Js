function solve(arr){
    let playersAndCards = {};
    let powerOfCards = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, J:11, Q:12, K:13, A:14};
    let typeOfCards = {S:4, H:3, D:2, C:1};
    for(let el of arr){
        let [playerName,cards] = el.split(": ");
        cards = cards.split(", ");
        if(playerName in playersAndCards){
            playersAndCards[playerName].push(...cards);
        }else{
            playersAndCards[playerName] = cards;
        }
    }
    //console.log(playersAndCards);
    let entries = Object.entries(playersAndCards);
   

    for(let [name,deck] of entries){
        let finalDeck = new Set(deck);
        let sumOfCards = 0;
        for(let card of finalDeck){
            let numFromCards = card.slice(0,card.length - 1);
            let type = card.slice(card.length - 1);
            sumOfCards += powerOfCards[numFromCards] * typeOfCards[type];
            
        }
        
        console.log(`${name}: ${sumOfCards}`);

    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );