function solve(input){

    function afterCeser(obj,sumObj){
        // let obj = {
        //     Peter: { Duck: 400 },
        //     Gladius: { Heal: 200, Support: 250, Shield: 250 }
        //   }
        
        let sumObj = {}
        for( let gladName in obj){
            let sumSkillPoints = 0
            for(let skillName in obj[gladName]){
                sumSkillPoints += obj[gladName][skillName];
            }
            sumObj[gladName] = sumSkillPoints;
            
        }
        
        let entriesSumObj = Object.entries(sumObj).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    
        let entriesObj = Object.entries(obj);
       
        for(let [name,points] of entriesSumObj){
            console.log(`${name}: ${points} skill`);
            for(let [glad,skillObj] of entriesObj){
                
                if(name == glad){
                    let entriesSkill = Object.entries(skillObj).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
                    for(let [skill,power] of entriesSkill){
                        console.log(`- ${skill} <!> ${power}`);
                    }
                }
                
            }
        }
       
        
    }
    //end of function
    //let gladList = input.slice()
    let gladiators = {};
    for(let el of input){
        if(el.includes("->")){
            let [gladName,skill,points] = el.split(" -> ");
            points = Number(points);
            
            if(gladName in gladiators){
                if(skill in gladiators[gladName]){
                    if(points > gladiators[gladName][skill]){
                        gladiators[gladName][skill] = points
                    }else{
                        continue;
                    }
                }else{
                    gladiators[gladName][skill] = points;
                }
            }else{
                gladiators[gladName] = {};
                gladiators[gladName][skill] = points;
            }
        }else if(el == "Ave Cesar"){
            afterCeser(gladiators)
            break;
        }else{
            let [glad1,glad2] = el.split(" vs ");
            if(glad1 in gladiators && glad2 in gladiators){
                for( let kvp in gladiators[glad1]){
                    
                    if(kvp in gladiators[glad2]){
                        //let fightRes = gladiators[glad1][kvp] - gladiators[glad2][kvp];
                        if(gladiators[glad1][kvp] >= gladiators[glad2][kvp]){
                            delete gladiators[glad2];
                        }else{
                            delete gladiators[glad1];
                        }
                    }
                    
                    
                }
            }
        }
        
    }

}

solve([
'Peter -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Peter vs Gladius',
'Gladius vs Julius',
'Gladius vs Maximilian',
'Ave Cesar'
]
);