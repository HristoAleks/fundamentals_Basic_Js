function demo(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let ch = Number(arr[i]);
        if(ch % 2 == 0){
            sum += ch;
        }else{
            sum -= ch;
        }
    }
    console.log(sum);
}

demo([3,5,7,9])