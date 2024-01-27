function demo(arr){
    let start = 0;
    let length = 0;
    let curLength = 1;
    let tempStart = 0;
    for(let i = 1; i < arr.length; i++){
        let num1 = arr[i];
        let num2 = arr[i-1];
        if(num1 == num2){
            curLength++;
            if(curLength > length){
                length = curLength;
                start = tempStart;
                //console.log(start, length);
            }
        }else{
            curLength = 1;
            tempStart = i;
        }
        
    }
    console.log(arr.slice(start, start + length).join(" "));
}

demo([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);