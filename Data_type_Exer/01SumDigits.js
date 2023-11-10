function demo(num){
    let sum = 0;
    while(num > 0){
        let ch = num % 10;
        num -= ch;
        num /=10;
        sum += ch; 
    }
    console.log(sum);
}

demo(543);