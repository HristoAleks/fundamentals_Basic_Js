function solve(){
    let arr = ['one','two','three','four'];
    
    if(arr.includes("two")){
        let index = arr.indexOf("two");
        console.log(index);
        arr.push(arr[index])
    }
    console.log(arr);
    
}

solve();