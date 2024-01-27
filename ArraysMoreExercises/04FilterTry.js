function demo(arr){
    let theNum = 0;
    let test = arr.filter((arr) => arr.length > 0);
    
    console.log(test);
}

demo([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);