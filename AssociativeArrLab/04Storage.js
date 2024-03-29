function solve(arr){
    let map = new Map();

    for(let str of arr){
        let tokens = str.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if(!map.has(product)){
            map.set(product, quantity);
            
        }else{
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity)
        }
    }
    
    
    for(let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);