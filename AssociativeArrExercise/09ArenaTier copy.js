function solve(input){

    function afterCeser(obj,sumObj){
        // let obj = {
        //     Peter: { Duck: 400 },
        //     Gladius: { Heal: 200, Support: 250, Shield: 250 }
        //   }
        
        // let sumObj = {}
        // for( let gladName in obj){
        //     let sumSkillPoints = 0
        //     for(let skill in obj[gladName]){
        //         sumSkillPoints += obj[gladName][skill];
        //     }
        //     sumObj[gladName] = sumSkillPoints;
            
        // }
        
        let entriesSumObj = Object.entries(sumObj).sort((a,b) => b[1] - a[1] /*|| a[0].localeCompare(b[0])*/);
    
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
    let versusArr = [];
    let gladArr = [];
    let gladList = {};
    for(let el of input){
        if(el.includes("->")){
            gladArr.push(el);
        }else{
            versusArr.push(el);
        }
    }

    for(let glad of gladArr){
        let [gladName,skill, points] = glad.split(" -> ");
        points = Number(points);
        

        if(gladName in gladList){
            if(skill in gladList[gladName]){
                if(gladList[gladName][skill] < points){
                    gladList[gladName][skill] = points;
                }else{
                    continue;
                }
            }else{
                gladList[gladName][skill] = points;
            }
        }else{
            gladList[gladName] = {};
            gladList[gladName][skill] = points;
        }
    }
    
    

    let sumGladPoints = {};
    for(let glad in gladList){
        let sum = 0;
        for(let skill in gladList[glad]){
            sum += gladList[glad][skill];
        }
        
        sumGladPoints[glad] = sum;
    }
    

    for(let command of versusArr){
        if(command == "Ave Cesar"){
            afterCeser(gladList,sumGladPoints);
            break;
        }
        let [glad1,glad2] = command.split(" vs ");
        if(glad1 in gladList && glad2 in gladList){
            for(let skillName in gladList[glad1]){
                //console.log(skillName);
                if(skillName in gladList[glad2]){
                    
                    if(sumGladPoints[glad1] > sumGladPoints[glad2]){
                        delete gladList[glad2];
                        delete sumGladPoints[glad2];
                    }else{
                        delete gladList[glad1];
                        delete sumGladPoints[glad1];
                    }
                }
            }
        }
    }
    
}

// solve([
// 'Peter -> Duck -> 400',
// 'Julius -> Shield -> 150',
// 'Gladius -> Heal -> 200',
// 'Gladius -> Support -> 250',
// 'Gladius -> Shield -> 250',
// 'Peter vs Gladius',
// 'Gladius vs Julius',
// 'Gladius vs Maximilian',
// 'Ave Cesar'
// ]
// );

solve([
    'Peter -> Skill1 -> 100',
    'Peter -> Skill2 -> 150',
    'Peter -> Skill3 -> 200',
    'Julius -> Skill1 -> 200',
    'Julius -> Skill2 -> 150',
    'Julius -> Skill3 -> 100',
    'Gladius -> Skill1 -> 100',
    'Gladius -> Skill2 -> 150',
    'Gladius -> Skill3 -> 200',
    'Ave Cesar'
  ])