function demo(arr){
let theArr = [];
for(let i = 2; i < arr.length; i++){
    let field = Number(arr[0]);
    let arrBugPlaces = arr[1].split(" ");
    for(let j = 0; j < arrBugPlaces.length; j++){
        let ch = Number(arrBugPlaces[j]);
        theArr[ch] = 1;
    }
    let movement = arr[i].split(" ");
    let place = Number(movement[0]);
    let direction = movement[1];
    let step = Number(movement[3]);
    
    console.log(theArr);

    
}

}

demo([ 3, '0 1','0 right 1','2 right 1'])