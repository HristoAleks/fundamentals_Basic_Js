function demo(num){
    let resault = "";
    for(let i = 0; i < num; i++){
        let toString = num.toString() + " ";
        let rep = toString.repeat(num)
        resault += rep + "\n";
    }
    console.log(resault);
}

demo(3);