function formatGrade(grade){
    let label;
    let round  = 2;
    if(grade < 3){
        label = "Fail";
        round = 0;
        
        //console.log(`Fail (2)`);
    }else if(grade < 3.50){
        label = "Poor";
        //console.log(`Poor (${grade.toFixed(2)})`);
    }else if(grade < 4.50){
        label = "Good";
        //console.log(`Good (${grade.toFixed(2)})`);
    }else if(grade < 5.50){
        label = "Very good";
        //console.log(`Very good (${grade.toFixed(2)})`);
    }else{
        label = "Excellent";
        //console.log(`Excellent (${grade.toFixed(2)})`);
    }
    console.log(`${label} (${grade.toFixed(round)})`);
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);