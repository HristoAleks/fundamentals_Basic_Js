function solve(arr){
    let resources = {};
    for(let i = 0; i < arr.length; i += 2){
        let name = arr[i];
        let amount = Number(arr[i+1]);
        if(name in resources){
            resources[name] += amount;
        }else{
            resources[name] = amount;
        }
    }
    for( let resource in resources ){
        console.log(`${resource} -> ${resources[resource]}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );