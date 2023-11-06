function demo(num){
    let numToStr = String(num);
    let sum = 0;
    for(let i = 0; i < numToStr.length; i++){
        sum += Number(numToStr[i]);
    }
    let resault = String(sum).includes("9");
    console.log(resault? `${num} Amazing? True`: `${num} Amazing? False`);
}

demo(1233)