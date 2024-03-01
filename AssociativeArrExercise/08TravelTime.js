function solve(arr){
    let obj = {};
    for(let el of arr){
        let [countryName,townName,travelCost] = el.split(" > ");
        travelCost = Number(travelCost);
        if(countryName in obj){

            if(townName in obj[countryName]){

                if(travelCost < obj[countryName][townName]){
                    obj[countryName][townName] = travelCost;
                }else{
                    continue;
                }

            }else{
                obj[countryName][townName] = travelCost;
            }

        }else{
            obj[countryName] = {};
            obj[countryName][townName] = travelCost;
            
        }
    }

    let entries = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
     for(let entry of entries){
        let values = Object.entries(entry[1]).sort((a,b) => a[1] - b[1]);
        let print = "";
        for(let value of values){
            print += `${value[0]} -> ${value[1]} `;
        }
        console.log(`${entry[0]} -> ${print}`);
    }
    //console.log(entries);
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );


solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    );