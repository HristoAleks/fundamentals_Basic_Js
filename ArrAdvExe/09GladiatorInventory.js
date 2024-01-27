function solve(arr){
    let inventory = arr
                    .shift()
                    .split(" ");
    for(let ch of arr){
        let infoArr = ch.split(" ");
        let [command,item] = infoArr;
        switch(command){
            case "Buy": buy(item); break;
            case "Trash": trash(item); break;
            case "Repair": repair(item); break;
            case "Upgrade": upgrade(item); break;
        }
    }
    console.log(inventory.join(" "));

    function buy(item){
        //let inventory = ['SWORD', 'Shield', 'Spear'];
        let el = item//replace later with item
        if(!inventory.includes(el)){
            inventory.push(el);
        }
    }
    
    function trash(item){
        //let inventory = ['SWORD', 'Shield', 'Spear'];
        let el = item;//replace with item
        if(inventory.includes(el)){
            let index = inventory.indexOf(el);
            inventory.splice(index,1);
        }
    }
    // rework this probably
    function repair(item){
        //let inventory = ['SWORD', 'Shield', 'Spear'];
        let el = item;//replace with item
        if(inventory.includes(el)){
            let index = inventory.indexOf(el);
            inventory.splice(index,1);
            inventory.push(el);
        }
    }
    
    function upgrade(item){
        //let item = 'SWORD-Steel';//remove this
        //let inventory = ['SWORD', 'Shield', 'Spear'];
        let itemsArr = item.split("-");
        let [itemToCheck,theUp] = itemsArr;
        if(inventory.includes(itemToCheck)){
            let index = inventory.indexOf(itemToCheck);
            inventory.splice(index + 1, 0, `${itemToCheck}:${theUp}`);
        }
       
    }
    
}

solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);