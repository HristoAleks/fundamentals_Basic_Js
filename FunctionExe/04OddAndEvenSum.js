function demo(num){
    
    

    let [evenSum, oddSum] = oddAndEvenSum(num)
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


    function oddAndEvenSum(str){
    let evenSum = 0;
    let oddSum = 0;
    let numToStr = num.toString();
    for(let i = 0; i < numToStr.length; i++){
            let theNum = num % 10;
            num -= theNum
            num = num / 10;
            if(theNum % 2 == 0){
                evenSum += theNum;
            }else{
                oddSum += theNum;
            }
        }
        return [evenSum, oddSum];
    }
}

demo(1000435);