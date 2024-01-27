function demo(arr){
    let field = Number(arr[0]);
    let arrBugPlaces = arr[1].split(" ");
    let theArr = [];
    for(let i = 0; i < arrBugPlaces.length; i++){
        let ch = Number(arrBugPlaces[i]);
        theArr[ch] = 1;
    }
    for(let j = 2; j < arr.length; j++){
        let splitedArr = arr[j].split(" ");
        let pos = Number(splitedArr[0]);
        let direction = splitedArr[1];
        let step = Number(splitedArr[2]);
        //let curPos = theArr[pos];//gives us the el at pos 0 and 2;
        let newPos = pos + step;
        if(newPos > (field - 1)){
            theArr[pos] = 0;
            continue;
        }else if(theArr[newPos] == 1 && direction == "right"){
            newPos += step;
            theArr[newPos] = 1;
            theArr[pos] = 0;
        }else if(theArr[newPos] == 1 && direction == "left"){
            newPos -= step;
            theArr[newPos] = 1;
            theArr[pos] = 0;
        }else{
            theArr[newPos] = 1;
        }
        
        
    }
    //console.log(theArr);
    console.log(theArr.join(" "));
}
    

    
demo([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1'])
