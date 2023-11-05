function demo(num){
    let oddNum = 1;
    let sum = 0;

    for(let i = 1; i<= num; i++){
        sum += oddNum;
        console.log(oddNum);
        oddNum += 2;
    }
    console.log(`Sum: ${sum}`);
}

demo(5);