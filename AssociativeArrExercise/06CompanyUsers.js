function solve(arr){
    let emploies = {};
    for(let el of arr){
        let [firm,idies] = el.split(" -> ");
        
        if((firm in emploies && !emploies[firm].includes(idies))){
            emploies[firm].push(idies);
        }else{
            let idArr = [];
            idArr.push(idies);
            emploies[firm] = idArr;
        }

    }
    let entries = Object.entries(emploies);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    
    for(let [firm,numbers] of entries){
        console.log(`${firm}`);
        for(let el of numbers){
            console.log(`-- ${el}`);
        }
    }
}

solve([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
]);