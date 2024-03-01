function solve(arr){
    for(let el of arr){
        let infoArr = el.split(" | ");
        let town = infoArr[0];
        let latitude = Number(infoArr[1]).toFixed(2);
        let longitude = Number(infoArr[2]).toFixed(2);
        let obj = {town,latitude,longitude};
        console.log(obj);

        
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);