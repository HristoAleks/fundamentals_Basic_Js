function solve(arr){

    let concrete = 195;
    let answereArr =[]
    let costOfOneBrick = 1900;
    let priceSum = 0;
    // if (arr.length > 2000){
    //     total = -1;
    // }

    while(arr.length > 0){
        if(arr.includes(30)){
            let remove = arr.indexOf(30);
            arr.splice(remove, 1);
            continue;
        }
        let conForADay = 0;
        for(let i = 0; i < arr.length;i++){
            
            arr[i] += 1;
            conForADay += concrete;
            if(arr[i] >= 30){
                arr.splice(i,1);
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

solve([30])

