function demo(input){
    let toArr = input[0];
    let room = toArr.split("|");
    //console.log(room);
    let health = 100;
    let coins = 0;
    let curRoom = 0;
    for(let el of room){
        curRoom++;
        let token = el.split(" ");
        //console.log(token);
        let command = token[0];
        let num = Number(token[1]);
        if(command == "potion"){
            let test = health + num <= 100 ? num : 100 - health;
            health += test;  
            console.log(`You healed for ${test} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(command == "chest"){
            coins += num;
            console.log(`You found ${num} coins.`);
        }else{
            health -= num;
            if(health > 0){
                console.log(`You slayed ${command}.`);
            }else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${curRoom}`);
                break;
            }
        }
        
    }
    if(health > 0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

demo(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);