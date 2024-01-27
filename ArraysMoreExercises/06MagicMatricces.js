function demo(arr){
    let counter1 = 0;
    
    for(let i = 0; i < arr.length; i ++){
        let sum1 = 0;
        let sum2 = 0;

        for(let j = 0; j < arr[i].length; j++){
            sum2 += arr[i][j];
        }

        for(let k = 0; k < arr.length; k++){
            sum1 += arr[k][i];
        }

        if(sum1 !== sum2){
            counter1++;
            break;
        }
    }
    console.log(counter1 > 0? false: true);
}

demo([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

demo([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

demo([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )