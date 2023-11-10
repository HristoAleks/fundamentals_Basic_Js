function demo(num1,oper,num2){
    let resault = 0;
    if(oper == "+"){
        resault = num1 + num2;
    }else if(oper == "-"){
        resault = num1 - num2;
    }else if(oper == "/"){
        resault = num1 / num2;
    }else{
        resault = num1 * num2;
    }
    console.log(resault.toFixed(2));
}

demo(5,'+', 10);