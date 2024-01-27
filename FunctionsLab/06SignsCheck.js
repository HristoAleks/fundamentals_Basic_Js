function demo(a,b,c){
    let numArr = [a, b, c];
    let counter = 0;
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] < 0){
            counter++;
        }
    }
    if(counter % 2 == 0){
        console.log("Positive");
    }else{
        console.log("Negative");
    }
}

demo(-6,
    -12,
     14
    )