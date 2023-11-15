function demo(num){
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if(num >= 0 && num <= 7){
        console.log(arr[num -1]);
    }else{
        console.log("Invalid day!");
    }
    // for(let i = 0; i < arr.length; i++){
    //     console.log(arr[i]);
    // }
}

demo(3);