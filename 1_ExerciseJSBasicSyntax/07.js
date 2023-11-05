function demo(num){
    let buff = "";
    let test = 0;
    for(let i = 1; i <= num; i++){
        test++;
        buff = "";
        for(let b = 1; b <= i;b++){
            buff += test + " ";
        }
        
        console.log(buff);
    }
}

demo(5)