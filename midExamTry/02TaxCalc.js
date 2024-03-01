function solve(str){
    let arr = str[0].split(">>");
    //console.log(arr);
    let sumTaxes = 0;
    for(let el of arr){
        let infoArr = el.split(" ");
        let carType = infoArr[0];
        let yearsOfTaxes = Number(infoArr[1]);
        let kmTraveled = Number(infoArr[2]);
        // if(carType != "family" || carType != "heavyDuty" || carType != "sports"){
        //     continue;
        // }
        let taxesForACar = 0;

        if(carType == "family"){
            let tax = 50;
            let taxIncreas = Math.floor(kmTraveled / 3000);
            //console.log(taxIncreas);
            taxesForACar = taxIncreas * 12 + (tax - yearsOfTaxes * 5);
            //console.log(taxesForACar);
            console.log(`A ${carType} car will pay ${taxesForACar.toFixed(2)} euros in taxes.`);
        }else if(carType == "heavyDuty"){
            let tax = 80;
            let taxIncreas = Math.floor(kmTraveled / 9000);
            //console.log(taxIncreas);
            taxesForACar = taxIncreas * 14 + (tax - yearsOfTaxes * 8);
            //console.log(taxesForACar);
            console.log(`A ${carType} car will pay ${taxesForACar.toFixed(2)} euros in taxes.`);
        }else if(carType == "sports"){
            let tax = 100;
            let taxIncreas = Math.floor(kmTraveled / 2000);
            //console.log(taxIncreas);
            taxesForACar = taxIncreas * 18 + (tax - yearsOfTaxes * 9);
            //console.log(taxesForACar);
            console.log(`A ${carType} car will pay ${taxesForACar.toFixed(2)} euros in taxes.`);
        }else{
            console.log("Invalid car type.");
            continue;
        }

        sumTaxes += taxesForACar;

    }

    console.log(`The National Revenue Agency will collect ${sumTaxes.toFixed(2)} euros in taxes.`);
}

solve(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);