function solve(arr){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        let ch = arr[i];
        if(!newArr.includes(ch)){
            newArr.push(ch);
        }
    }
    console.log(newArr.join(" "));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);