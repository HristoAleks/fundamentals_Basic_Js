function solve(arr){
    let toReach = arr.map(el => calc(el));
    function calc(el){
        let missing = 30 - el;
        let resault = missing + el;
        return resault;
    }
    

    


    
    console.log(totalBlocks);
}

solve([21, 25, 28]);