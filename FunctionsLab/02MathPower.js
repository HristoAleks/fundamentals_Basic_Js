function mathPower(num, exp){
    let resault = 1;
    for(let i = 0; i < exp; i++){
        resault *= num;
    }
    console.log(resault);
  
}

console.log(mathPower(2,8));