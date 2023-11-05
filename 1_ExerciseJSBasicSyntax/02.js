function demo(num,decimal){
    if(decimal > 15){
        decimal = 15
    }
    let test = num.toFixed(decimal)
    test = parseFloat(test)
    console.log(test);
}

demo(10.5,3)