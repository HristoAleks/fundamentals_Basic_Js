function demo(num){
    let resArr = [];
    for(let i = 1; i <= 100; i+= 10){
        if(i <= num){
            resArr.push("%");
        }else{
            resArr.push(".");
        }
    }
    if(num == 100){
        console.log(`100% Complete!${"\n"}[${resArr.join("")}]`);
    }else{
        console.log(`${num}% [${resArr.join("")}]${"\n"}Still loading...`);
    }
    
}

demo(30);