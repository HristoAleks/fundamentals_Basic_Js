function solve(arr){
    let finalArr = [];
    let sortArr = arr.sort((a,b) => a - b);
    
    while(sortArr.length > 0){
        if(finalArr == 1){
            let ch = sortArr.pop()
            finalArr.push(ch);
        }else{
            let lastCh = sortArr.pop()
            finalArr.push(lastCh);
            let firstCh = sortArr.shift()
            finalArr.push(firstCh);
        }
    }
    console.log(finalArr.join(" "));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);