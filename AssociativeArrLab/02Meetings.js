function solve(arr){
    let schedual = {};
    for(let el of arr){
        let [weekday, name] = el.split(" ");
        if(schedual.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        }else{
            schedual[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for(let key in schedual){
        console.log(`${key} -> ${schedual[key]}`);
    }

}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);