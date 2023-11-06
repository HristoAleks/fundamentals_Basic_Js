function demo(a,b,c){
    // let sum = a + b + c;
    // let test = sum % 1
    // if(test == 0){
    //     console.log(`${sum} - Integer`);
    // }else{
    //     console.log(`${sum} - Float`);
    // }

    let sum = a + b + c;
    console.log(`${sum} - ${sum % 1 == 0? "Integer":"Float"}`);
}

demo(9, 100, 1.1)