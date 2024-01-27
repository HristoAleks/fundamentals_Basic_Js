function demo(char1, char2){
    let numFromChar1 = char1.charCodeAt(0);
    let numFromChar2 = char2.charCodeAt(0);

    console.log(charsInBetween(numFromChar1, numFromChar2));
    function charsInBetween(char1, char2){

        let biggerNumFromChar = 0;
        let smallerNumFromChar = 0;

        if(char1 >= char2){
            biggerNumFromChar = char1;
            smallerNumFromChar = char2;
        }else{
            biggerNumFromChar = char2;
            smallerNumFromChar = char1;
        }
        
        let resault = "";

        for(let i = smallerNumFromChar + 1; i < biggerNumFromChar; i++){
            let numToChar = String.fromCharCode(i);
            resault += numToChar + " ";
        }
        return resault;
    }
}

demo('#', ':');