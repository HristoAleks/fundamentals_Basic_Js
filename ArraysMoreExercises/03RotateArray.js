function demo(arr){
    let rotations = Number(arr.pop());
    for(let i = 0; i < rotations; i++){
         
        arr.unshift(arr.pop());

    }
    console.log(arr.join(" "));
}

demo(['Banana', 'Orange', 'Coconut', 'Apple', '15']);