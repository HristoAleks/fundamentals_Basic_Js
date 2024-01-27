function demo(arr,target){
    for(let i = 0; i < arr.length; i++){
        let test = target - arr[i];
        if(arr.includes(test)){
            console.log(arr[i], test);
            delete arr[i];
        }
    }
}
demo([1, 7, 6, 2, 19, 23],8);