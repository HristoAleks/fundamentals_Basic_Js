function demo(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        
        let test = i % 10;
        let one = parseInt(i / 10);
        sum = one + test;
        if(sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}

demo(15);