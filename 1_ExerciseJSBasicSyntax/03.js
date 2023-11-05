function demo(num){
    let divisible = 0;
    if(num % 10 === 0){
        divisible = 10;
    }else if(num % 7 === 0){
        divisible = 7;
    }else if(num % 6 === 0){
        divisible = 6;
    }else if(num % 3 === 0){
        divisible = 3;
    }else if(num % 2 === 0){
        divisible = 2;
    }else{
        console.log(`Not divisible`);
    }
    if( divisible !== 0){
        console.log(`The number is divisible by ${divisible}`);
    }
    
}

demo(30);