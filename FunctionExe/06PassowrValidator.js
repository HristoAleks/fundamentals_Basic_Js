function password(pass){
    let testLength = chackPassLength(pass);
    let testNumbersAndDigits = checkForNumberAndDigits(pass);
    let testForNumberOfDigits = checkForNumberOfDigits(pass);
    if( testLength && testNumbersAndDigits && testForNumberOfDigits){
        console.log("Password is valid");
    }

    function chackPassLength(pass){
        if(pass.length >=6 && pass.length <= 10){
            return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkForNumberAndDigits(str){
        for(let ch of str){
            let numFromChar = ch.charCodeAt(0);
            if(
                !((numFromChar >= 48 && numFromChar <= 57) ||
                (numFromChar >= 65 && numFromChar <= 90) ||
                (numFromChar >= 97 && numFromChar <= 122))
            ){
                console.log("Password must consist only of letters and digits");
                return false
            }
        }
        return true;
    }

    function checkForNumberOfDigits(str){
        let digCounter = 0;
        for(let ch of str){
            let numFromChar = ch.charCodeAt(0);
            if(numFromChar >= 48 && numFromChar <= 57){
                digCounter++;
            }
        }
        if(digCounter >= 2){
            return true;
        }else{
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

}

password('logIn');