function demo(arr){
    for(let i = 0; i < arr.length; i++){
        let curNum = arr[i].toString();
        let revNum = polindrom(curNum)
        console.log(curNum == revNum);
    }
    function polindrom(num){
        let numToStr = num.toString();
        let reverseNum = "";
        for(let j = numToStr.length - 1; j >= 0; j--){
            reverseNum += numToStr[j];
        }
        return reverseNum;
    }
}

demo([123,323,421,121]);