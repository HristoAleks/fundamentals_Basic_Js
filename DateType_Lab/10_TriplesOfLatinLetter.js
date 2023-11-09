function demo(num){
    
    for(let i = 0; i < num; i++){
        let res = "";
        let letter = String.fromCharCode(97 + i);
        res = letter;
        //console.log(letter);
        for(let b = 0; b < num; b++){
            let resTwo = "";
            let letter = String.fromCharCode(97 + b);
            resTwo = res + letter;
            //console.log(resTwo);
            for(let c = 0; c < num; c++){
                let res3 = ""
                let test = String.fromCharCode(97 + c);
                res3 = resTwo + test;
                console.log(res3);
            }            
        }        
    }
}

demo('3');