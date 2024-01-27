function solve(arr){
    let newArr = [];
    for( let ch of arr){
        let numFromChar = Number(ch);
        if(numFromChar < 0){
            newArr.unshift(numFromChar);
        }else{
            newArr.push(numFromChar);
        }
    }

    console.log(newArr.join("\n"));
}

solve(['7', '-2', '8', '9']);