function demo(arr){
    let field = arr[0];
    let places = arr[1].split(" ");
    let theArr = [];
    for(let i = 0; i < field; i++){
        let toStr = String(i);
        if(places.includes(toStr)){
            theArr[i] = 1;
            console.log(theArr);
        }else{
            theArr[i] = 0;
        }
    }
    console.log(theArr);
}

demo([5,"0 2"])