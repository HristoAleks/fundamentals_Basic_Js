function solve(arr,takeArr){
    let [toTake,toDel,toFind] = takeArr;
    let newArr = arr.slice(0,toTake);
    newArr.splice(0,toDel);
    let counter = 0;
    let test = newArr.filter(el => el == toFind);
    // for(let num of newArr){
    //     if(num == toFind){
    //         counter++;
    //     }
    // }
                
    console.log(test.length);
    //console.log(`Number ${toFind} occurs ${counter} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );