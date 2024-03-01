function solve(arr){
    let parking = {};
    for(let el of arr){
        let [action, carNum] = el.split(", ");
        if(action.toLowerCase() == "in"){
            parking[carNum] =carNum;
        }else if(action.toLowerCase() == "out"){
            delete parking[carNum]
        }
    }
    
    let entries = Object.keys(parking).sort();
    //console.log(entries);

    

    if(entries.length > 0){
        for(let entry of entries){
            console.log(entry);
        }
    }else{
        console.log("Parking Lot is Empty");
    }

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);