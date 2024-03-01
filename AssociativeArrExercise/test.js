function arenaTier(list) {
    const gladiatorsList = {}

    list.forEach(x => {
        if (x.includes('->')) {
            const [name, skill, amount] = x.split(' -> ').map(x => isNaN(x) ? x : Number(x))//ако някое върне NaN го прави на Number
            //ако го няма в обекта го добавя 
            if (!gladiatorsList[name]) gladiatorsList[name] = {[skill]: amount}
            //ако точките на същест. глад са по - малко от amount ги променя
            if (gladiatorsList[name][skill] < amount) {
                gladiatorsList[name][skill] = amount
                //ако гладиатори няма съществуващо умение, го добави(името е съществуващо вече)
            } else if (!gladiatorsList[name][skill]) gladiatorsList[name][skill] = amount
        } else if (x.includes(' vs ')) {
            const [gladiatorOneName, gladiatorTwoName] = x.split(' vs ')
            if (gladiatorsList[gladiatorOneName] && gladiatorsList[gladiatorTwoName]) {
                const foundSkills = Object.keys(gladiatorsList[gladiatorOneName]).filter(x => Object.keys(gladiatorsList[gladiatorTwoName]).includes(x))
                if (foundSkills.length !== 0) {
                    const gladiatorOnePower = eval(Object.values(gladiatorsList[gladiatorOneName]).join('+'))//май събира точките на първеия
                    const gladiatorTwoPower = eval(Object.values(gladiatorsList[gladiatorTwoName]).join('+'))//събира точките на втория
                    //сравнява ги
                    if (gladiatorOnePower > gladiatorTwoPower) {
                        delete gladiatorsList[gladiatorTwoName]//трие
                    } else delete gladiatorsList[gladiatorOneName]//трие
                }
            }
        }
    })
//                 разглабя обекта, akey трябва да e imeto, аValue е обекта
    const test = Object.entries(gladiatorsList).sort(([aKey, aValue], [bKey, bValue]) => {
        const aSum = eval(Object.values(aValue).join('+'))//пак търсим сума
        const bSum = eval(Object.values(bValue).join('+'))//пак търсим сума
        return bSum - aSum
    })
        // това доло трябва вече да е масив
    test.forEach(([gladiator, skills]) => {
        console.log("----------");
        console.log(skills);
        console.log(`${gladiator}: ${Object.values(skills).reduce((acc, skill) => acc + skill, 0)} skill`);
        const sortedSkills = Object.entries(skills)
            .sort(([aSkill, aPoints], [bSkill, bPoints]) => bPoints - aPoints || aSkill.localeCompare(bSkill));
        sortedSkills.forEach(([skill, points]) => {
            console.log(`- ${skill} <!> ${points}`)
        })
    })
}

arenaTier([
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