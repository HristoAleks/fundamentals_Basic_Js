function solve(str){
    let test = str.indexOf("l",10);
    //console.log(test);
    let index = 0;
    let count = 0;
    let text = str.indexOf("l");
    res = text;

    while(res > 0){
        if(res > 0){
            count++;
            console.log(res);
        }
        let res = str.indexOf("l",index);

        
    }
    // for(let el of str){
    //     let text = 
    //     res = el.indexOf("l",res+1);
    //     if(res > 0){
    //         count++;

    //     }
    // }
    console.log(count);

}

solve("lhello world");