function demo(a,b){
    let firstResault = factorial(a);
    let secondResault = factorial(b);
    let finalResault = firstResault / secondResault;
    console.log(finalResault.toFixed(2));
    function factorial(num){
        let sum = 1;
        for(let i = num; i > 0; i--){
            sum *= i;
        }
        return sum;
    }
}

demo(6,2);