function orders(order, amount){
    let price = 0;
    switch(order){
        case "coffee": price = amount * 1.50; break;
        case "water": price = amount * 1.00; break;
        case "coke": price = amount * 1.40; break;
        case "snacks": price = amount * 2.00; break;
    }
    console.log(price.toFixed(2));
}

orders("water", 5);
orders('........');
orders("coffee", 2);
