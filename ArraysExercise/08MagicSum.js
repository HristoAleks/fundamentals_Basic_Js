function demo(arr,target){
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < arr.length; j++){
    //         if(arr[i] + arr[j] == target && i !== j){
    //             console.log(arr[i], arr[j]);
    //             delete arr[i];
    //             delete arr[j];
    //         }
    //     }
    // }
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                console.log(arr[i], arr[j]);
                // delete arr[i];
                // delete arr[j];
            }
        }
    }
}
demo([1, 2, 3, 4, 5, 6],6);