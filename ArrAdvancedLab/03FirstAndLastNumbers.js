function solve(arr){
    let k = arr[0];
    let start = arr.slice(1, 1 + k);
    let end = arr.slice(-k);
    console.log(start.join(" "));
    console.log(end.join(" "));
}

solve([2, 7, 8, 9]);