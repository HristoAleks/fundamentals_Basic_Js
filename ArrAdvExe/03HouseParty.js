function solve(arr){
    let guestsArr = [];
    for(let i = 0; i < arr.length; i++){
        let infoArr = arr[i].split(" ");
        let name = infoArr[0];
        let command = infoArr[2];
        if(command !== "not")
            if (guestsArr.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                guestsArr.push(name);
            }
        else{
            let finder = guestsArr.indexOf(name);
            if(finder == -1){
               console.log(`${name} is not in the list!`);
            }else{
                guestsArr.splice(finder,1);
            }
        }

    }
    console.log(guestsArr.join("\n"));
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);