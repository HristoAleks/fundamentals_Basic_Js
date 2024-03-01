function solve(arr){
    let collectArr = [];
    for(let el of arr){
        let infoArr = el.split(" : ");
        let [productName,productPrice] = infoArr;
        productPrice = Number(productPrice);
        let obj = {productName,productPrice};
        collectArr.push(obj);
    }
    collectArr.sort((a,b) => a.productName.localeCompare(b.productName));
    let letter = "";
    for(let ch of collectArr){
        if(ch.productName.charAt(0) !== letter){
            letter = ch.productName.charAt(0);
            console.log(letter);
            console.log(`${"\t"}${ch.productName}: ${ch.productPrice}`);
        }else{
            console.log(`${"\t"}${ch.productName}: ${ch.productPrice}`);
        }
        
    }
    //console.log(collectArr);

}

solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]
);