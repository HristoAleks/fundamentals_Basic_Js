function solve(arr){
    let plunderDays = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let goal = Number(arr[2]); 

    let curPlunder = 0;

    for(let i = 1; i <= plunderDays; i++){
        curPlunder += dailyPlunder;
        if(i % 3 == 0){
            curPlunder += dailyPlunder * 0.5;
        }
        if(i % 5 == 0){
            curPlunder = curPlunder * 0.7;
        }
        
    }

    if( curPlunder >= goal){
        console.log(`Ahoy! ${curPlunder.toFixed(2)} plunder gained.`);
    }else{
        let precentage = curPlunder / goal * 100;
        precentage = precentage.toFixed(2)
        console.log(`Collected only ${precentage}% of the plunder.`);
    }

}

solve(["10",
"20",
"380"])
;
