function solve(arr){
    let testArr = arr.sort();
    let newArr = [];
    for(let i = 0; i < testArr.length; i++){
        newArr.push(i+1 + "." + testArr[i]);
    }
    console.log(newArr.join("\n"));
    
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);