function repeatString(str, rep){
    let resault = "";
    for(let i = 0; i < rep; i++){
        resault +=  str;
    }
    return resault;
}

console.log(repeatString("abc", 3));