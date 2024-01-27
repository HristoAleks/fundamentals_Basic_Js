function demo(arr){
   for(let el of arr){
    let charToStr = el.toString();
    let polindrom = charToStr.split("").reverse().join("");
    console.log(charToStr == polindrom);
   }
}

demo([123,323,421,121]);