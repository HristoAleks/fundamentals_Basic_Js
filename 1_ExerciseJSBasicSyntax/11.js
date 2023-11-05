function demo(arr){
    //1 g of gold	67.51 lv.
    
    let sumMoney = 0;
    let bitcoin = 11949.16;
    let dayCounter = 0;
    let boughtBitcoins = 0;
    let bitcoinDay = 0
    let theDay = ""
    let flag = false;
    for(let g = 0; g < arr.length; g++){
        dayCounter++;
        
        let moneyFromGold = arr[g] * 67.51;
        if(dayCounter % 3 == 0){
            moneyFromGold *= 0.70;
        }
        sumMoney += moneyFromGold;
        //console.log(sumMoney);
        if(sumMoney >= bitcoin){
            boughtBitcoins += Math.floor(sumMoney / bitcoin);
            sumMoney = sumMoney % bitcoin;
            
            bitcoinDay++;
            if(bitcoinDay == 1){
                theDay = `Day of the first purchased bitcoin: ${dayCounter}`;
                flag = true;
            } 
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if(flag){
        console.log(theDay);
    }
    console.log(`Left money: ${sumMoney.toFixed(2)} lv.`);
}

demo([3124.15, 504.212, 2511.124]);