function solve(a, b, operator){
    
    let operations = [
        (a, b) => a * b,
        (a, b) => a / b,
        (a, b) => a + b,
        (a, b) => a - b
    ]

    let operationNames = [
        "multiply",
        "divide",
        "add",
        "subtract"
    ]

    
    let index;

    for(let i = 0; i <operationNames.length; i++){
        if(operator == operationNames[i]){
            index = i;
            break;
        }
    }

    // switch(operator){
    //     case "multiply":
    //         index = 0;
    //         break;
    //     case "divide":
    //         index = 1; 
    //         break;
    //     case "add":
    //         index = 2; 
    //         break;
    //     case "subtract":
    //         index = 3; 
    //         break;
    // }

    let operation = operations[index];
    let resault = operation(a, b);
    return resault;
}

console.log(solve(5, 5, 'multiply'));
console.log(solve(40, 8, 'divide'));
console.log(solve(12, 19, 'add'));
console.log(solve(50, 13, 'subtract'));