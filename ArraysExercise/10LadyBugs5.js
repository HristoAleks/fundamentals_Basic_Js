function demo(arr){
    let field = Number(arr[0]);
    let arrBugPlaces = arr[1].split(" ");
    let theArr = [];
    for(let i = 0; i < field; i++){
        let ch = String(i);
        if(arrBugPlaces.includes(ch)){
            theArr[i] = 1;
        }else{
            theArr[i] = 0;
        }
    }
    
    for(let j = 2; j < arr.length; j++){
        //console.log(theArr);
        let splitedArr = arr[j].split(" ");
        let pos = Number(splitedArr[0]);
        let direction = splitedArr[1];
        let step = Number(splitedArr[2]);
        if(theArr[pos] !== 1){
            continue;
        }
        
        if(direction == "left"){
            step *= -1; 
        }
        //console.log(step);
        let newPos = pos + step;
        theArr[pos] = 0;
        while(theArr[newPos] == 1){
            newPos += step;
        }
        //console.log(newPos);
        if(newPos < field && newPos >= 0){
            theArr[newPos] = 1;
        }

        
        
    }
    //console.log(theArr);
    console.log(theArr.join(" "));
}   

    
demo([ 5, '3',
'3 left 2',
'1 left -2']

)
