function solve(arr,bomb){
    let bombNum = bomb[0];
    let bombPower = bomb[1];
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let ch = arr[i];
        if(ch == bombNum){
            let start = Math.max(0,i - bombPower);
            let delNum = bombPower * 2 + 1;
            arr.splice(start, delNum);
            i = Math.max(i - 2 * bombNum);
        }
    }
    let sum = 0;
    for(let el of arr){
        sum += el;
    }
    console.log(sum);
}

//[1,, 1, , 2, 1]
//[1, 0, 1, 0, 2, 1]
//[1, 0, 1, 1, 0, 1, 1]
//[1, 0, 1, 0, 2, 1]
solve([1, 1, 2, 1, 1, 1, 2, 1, 2, 1],
    [2, 1]
    );