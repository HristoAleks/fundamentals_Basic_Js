function demo(arr){
    while(arr.length > 1){
        let condensed = [];
        for(let i = 0; i < arr.length - 1; i++){
            condensed[i] = arr[i] + arr[i + 1];
            
        }
        arr = condensed;
    }
    
    console.log(arr.join());
}

demo([5,0,4,1,2]);