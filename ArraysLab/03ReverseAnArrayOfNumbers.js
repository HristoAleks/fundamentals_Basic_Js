function demo(num,arr){
    let newArr = [];
    for(let i = 0; i < num; i++){
        newArr.push(arr[i]);
        
    }
    let reArr = [];
    for(let i = newArr.length - 1; i >= 0; i--){
        reArr.push(newArr[i]);
    }

    reArr = reArr.join(" ");
    console.log(reArr);
}

demo(3, [10, 20, 30, 40, 50])
