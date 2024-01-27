function demo(a,b,c){
    let sum = (num1, num2) => num1 + num2;

    let subtract = (num1,num2) => num1 - num2;
    // let resault1 = sum(a,b);
    // let resault2 = subtract(resault1, c);
    let resault2 = subtract(sum(a,b), c);
    console.log(resault2);

    

    // function sum(num1, num2){
    //     return num1 + num2;
    // }

    

    // function subtract(num1, num2){
    //     return num1 - num2;
    // }
}

demo(23, 6, 10);