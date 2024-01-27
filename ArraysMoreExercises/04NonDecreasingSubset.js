function demo(arr){
    let newArr = [];
    let theNum = 0;
    for(let i = 0; i < arr.length; i++){
        let ch = arr[i] ;
        if(ch >= theNum){
            theNum = ch;
            newArr.push(theNum);
        }
    }
    console.log(newArr.join(" "));
}

demo([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);