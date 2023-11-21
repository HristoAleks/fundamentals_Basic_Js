function demo(arr,rotations){
    while(rotations > 0){
        arr.push(arr[0]);
        arr.shift();
        rotations--;
    }
    console.log(arr.join(" "));
}

demo([32, 21, 61, 1], 4);