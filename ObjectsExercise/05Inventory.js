function solve(arr){
    let inventory = [];
    for(let el of arr){
        let infoArr = el.split(" / ");
        let heroName = infoArr[0];
        let heroLevel = Number(infoArr[1]);

        let obj = {Hero:heroName, level:heroLevel};
        if(infoArr.length > 2){
            obj.items = infoArr[2];
        }
        inventory.push(obj);
    }
    inventory.sort((a, b) => {return a.level - b.level});
    for(let obj of inventory){
        let entries = Object.entries(obj);
        console.log(`${entries[0][0]}: ${entries[0][1]}`);
        console.log(`${entries[1][0]} => ${entries[1][1]}`);
        if(entries.length == 3){
            console.log(`${entries[2][0]} => ${entries[2][1]}`);
        }
    }
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );