function demo(arr){
    for(let i = 0; i < arr.length / 2; i++){
        let ch = arr[i];
        arr[i]=arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = ch;
        
    }
    console.log(arr.join(" "));
    
}

demo(['a', 'b', 'c', 'd', 'e'])