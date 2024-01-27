function demo(arr){
    let topNum = 0;
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        topNum = arr[i];
        let test = true;
        for(let j = i + 1; j < arr.length; j++){
            let num = arr[j];
            if(topNum <= num){
                test = false;
                break;
            }
        }
        if(test){
            newArr.push(topNum)
        }
    }
    console.log(newArr.join(" "));
}

demo([14, 24, 3, 19, 15, 17]);