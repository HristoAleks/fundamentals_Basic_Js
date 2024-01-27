function solve(arr){

    let total = arr.length * 30;
    let concrete = 195;
    let answereArr =[]
    let costOfOneBrick = 1900;
    let priceSum = 0;
    // if (arr.length > 2000){
    //     total = -1;
    // }

    while(total > 0){
        let conForADay = 0;
        for(let i = 0; i < arr.length;i++){
            
            arr[i] += 1;
            conForADay += concrete;
            if(arr[i] >= 30){
                arr.splice(i,1);
                total -= 30;
                i--;
            }
            
        }
        answereArr.push(conForADay);
        priceSum += conForADay;
        
    }

    priceSum *= costOfOneBrick
    console.log(answereArr.join(", "));
    console.log(priceSum + " pesos");
}

solve([17, 22, 17, 19, 17])

