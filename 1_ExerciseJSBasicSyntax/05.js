function demo(num){
    if((num % 4 == 0 && num % 10 !== 0) || num % 400 == 0){
        console.log("yes");
    }else{
        console.log("no");
    }
}

demo(2003);