function demo(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            newArr[i] = arr[i] + i;
        }else{
            newArr[i] = arr[i] - i;
        }
    }

    let sumNewArr = 0;
    let sumOldArr =0;
    for(let i = 0; i < arr.length;i++){
        sumOldArr += arr[i];
    }
    for(let i = 0; i < newArr.length;i++){
        sumNewArr += newArr[i];
    }
    console.log(newArr);
    console.log(sumOldArr);
    console.log(sumNewArr);
}

demo([5, 15, 23, 56, 35]);