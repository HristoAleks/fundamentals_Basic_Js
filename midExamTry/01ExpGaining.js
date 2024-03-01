function solve(arr){
    let wantedXP = arr.shift();
    let numOfBattles = arr.shift();
    let sumOfXp = 0;
    let battleCount = 0;

    for(let i = 0; i < arr.length; i++){
        let currXp = arr[i];
        battleCount++;

        if(battleCount % 3 == 0){
            currXp = currXp + currXp * 0.15 ;
        }

        if(battleCount % 5 == 0){
            currXp = currXp - currXp * 0.10;
        }

        if(battleCount % 15 == 0){
            currXp = currXp + currXp * 0.05;
        }
        sumOfXp += currXp;
        
        if(sumOfXp >= wantedXP){
            break;
        }
    }

    if(sumOfXp >= wantedXP){
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    }else{
        let neededExperience = wantedXP - sumOfXp;
        console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`);
    }

}

solve([500,
    5,
    50,
    100,
    200,
    100,
    20])
    
    
;