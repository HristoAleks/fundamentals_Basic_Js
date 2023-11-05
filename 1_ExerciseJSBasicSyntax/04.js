function demo(numPpl,group,day){
    let price = 0;

    if(group == "Students"){
        switch(day){
            case "Friday": price = 8.45; break;
            case "Saturday": price = 9.80; break;
            case "Sunday": price = 10.46; break;
        }
    }else if(group == "Business"){
        switch(day){
            case "Friday": price = 10.90; break;
            case "Saturday": price = 15.60; break;
            case "Sunday": price = 16; break;
        }
    }else{
        switch(day){
            case "Friday": price = 15; break;
            case "Saturday": price = 20; break;
            case "Sunday": price = 22.50; break;
        }
    }

    let totalPrice = numPpl * price

    if(group == "Students" && numPpl >= 30){
        totalPrice *= 0.85;
    }else if( group == "Business" && numPpl >=100){
        totalPrice = (numPpl - 10) * price;
    }else if(group == "Regular" && (numPpl >=10 && numPpl <= 20)){
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

demo(30,"Students","Sunday");