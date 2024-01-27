function demo(arr){
    let leftSum = 0;
    let rightSum = 0;
    let testCounter = 0;
    let condition = false;
    if(arr.length > 1){
        for(let i = 0; i < arr.length; i++){
            let leftNum = arr[i];
            leftSum += leftNum;
            for(let j = i + 2;j < arr.length; j++){
                let rightNum = arr[j];
                rightSum += rightNum;
                if(leftSum == rightSum){
                    testCounter = i + 1;
                    condition = true;
                    break;
                }
            }
            rightSum = 0;
        }
    }
    if(arr.length < 2){
        console.log(0);
    }else if(condition){
        console.log(testCounter);
    }else{
        console.log("no");
    }
}

demo([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);