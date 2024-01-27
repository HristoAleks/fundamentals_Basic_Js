function demo(arr){
    let length = arr.length;
    let newArr = [];
    
    for(let i = 1; i <= arr.length; i++){
        if(arr[i-1] == "add"){
            newArr.push(i);
        }else{
            newArr.pop();
        }
    }
    // if(newArr.length > 0){
    //     console.log(newArr.join(" "));
    // }else
    console.log(newArr.length > 0 ? newArr.join(" "): "Empty");
    
}

demo(['remove', 'remove', 'remove']);