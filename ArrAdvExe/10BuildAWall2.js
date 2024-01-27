function solve(arr){
    
    let goalArr = arr.map(el => calc(el));
    function calc(el){
        let missing = 30 - el;
        let resault = missing + el;
        return resault;
    }

    let total = 0;
    for(let ch of goalArr){
        total += ch;
    }

    let concrete = 195;
    let answereArr =[]
    let costOfOneBrick = 1900;

    while(total > 0){
        let conForADay = 0;
        for(let i = 0; i < arr.length;i++){
            arr[i] += 1;
            conForADay += concrete;
        }
        answereArr.push(conForADay);
        
        if(arr.includes(30)){
            let indexToRemove = arr.indexOf(30);
            arr.splice(indexToRemove, 1);
            total -= 30;
        }
    }
    let priceSum = 0;
    for(let ch of answereArr){
        priceSum += ch;
    }
    priceSum *= costOfOneBrick
    console.log(answereArr.join(", "));
    console.log(priceSum + " pesos");
}

solve([17, 22, 17, 19, 17])

