function demo(yield){
    let sum = 0;
    let daysOn = 0;
    while(yield >= 100){
        daysOn++;
        sum += yield - 26;
        yield -= 10;
    }
    if(yield < 100 && sum >= 26){
        sum -= 26;
    }
    console.log(daysOn);
    console.log(sum);
}

demo(450);