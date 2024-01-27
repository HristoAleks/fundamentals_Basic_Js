function solve(n,k){
    let newArr = [1];
    let sumBeforeK = 0
    for(let i = 0; i < n -1; i++){
        let sum = 0;
        if(newArr.length < k){
            sumBeforeK += newArr[i];
            newArr.push(sumBeforeK);
        }else{
            let arrSum = newArr.slice(-k);

            for(let j = 0; j < arrSum.length; j++){
                sum += arrSum[j];
            }
            newArr.push(sum);
        }
                
    }
    console.log(newArr.join(" "));
}

solve(8, 2);