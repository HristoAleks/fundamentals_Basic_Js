function solve(arr){
    let currArr = arr
                .shift()
                .split(" ")
                .map(Number);
    let maxCapacity = Number(arr.shift());
    //console.log(maxCapacity);
    for(let i = 0; i < arr.length; i++){
        let infoArr = arr[i].split(" ")
        let command = infoArr[0];
        let numToPush = Number(infoArr[1]);
        if(command == "Add"){
            add(numToPush);
        }else{
            command = Number(command);
            for(let i = 0; i < currArr.length; i++){
                let numFromCurrArr = currArr[i];
                if(command + numFromCurrArr <= maxCapacity){
                    currArr[i] = currArr[i] + command;
                    break;
                }
            }
        }
    }
    console.log(currArr.join(" "));

    function add(num){
        currArr.push(num);
    }

    

}

solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);