function solve(stock,forStore){
    let products = {};
    for(let i = 0; i < stock.length; i += 2){
        let product = stock[i];
        let amount = Number(stock[i+1]);
        products[product] = amount;
        //console.log(products);
    }
    
    
    
    for(let j = 0; j< forStore.length;j+=2){
        let checkForProduct = forStore[j];
        let quantity = Number(forStore[j+1]);
        if(checkForProduct in products){
            products[checkForProduct] +=quantity;
        }else{
            products[checkForProduct] = quantity;
        }
        
    }
    let entries = Object.entries(products);
    
    for(let el of entries){
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );