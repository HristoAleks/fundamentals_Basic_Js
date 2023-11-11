function demo(loses,helmet,sword,shield,armor){
    let helmetCost = ((loses - loses % 2)/2)* helmet;
    let swordCost = ((loses - loses % 3)/3) * sword;
    let shieldCost = 0;
    let armorCost = 0;
    if( loses >= 6){
        shieldCost = ((loses - loses % 6)/6) * shield;
    }
    if(loses >= 12){
        armorCost = ((loses - loses % 12)/12) * armor;
    }
     let sum = helmetCost + swordCost + shieldCost + armorCost;
    
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

demo(23, 12.50, 21.50, 40, 200);