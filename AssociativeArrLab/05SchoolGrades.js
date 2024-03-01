function solve(arr){
    let studentsBook = {};
    for(let el of arr){
        let infoArr = el.split(" ");
        let name = infoArr.shift();
        let sumGrades = 0;
        for( let ch of infoArr){
            sumGrades += Number(ch);
        }
        let avarageGrade = sumGrades / infoArr.length;
        

        if(studentsBook.hasOwnProperty(name)){
            let existingGrade = Number(studentsBook[name]);
            let secondAvg = (existingGrade + avarageGrade) / 2;
            studentsBook[name] = secondAvg.toFixed(2);
            
        }else{
            studentsBook[name] = avarageGrade.toFixed(2);
        }
       
    }
    let entries = Object.entries(studentsBook);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    
    for(let key in finalBook){
        console.log(`${key}: ${finalBook[key]}`);
    }
}

solve(['Steven 1 0 0 1',
'George 4 6',
'Tammy 2 5 3',
'Tom 6 3']);