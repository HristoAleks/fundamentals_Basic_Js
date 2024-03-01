function solve(arr){
    let wordRepetition = {};
    
    for(let word of arr){
        if(word in wordRepetition){
            wordRepetition[word] += 1;
        }else{
            wordRepetition[word] = 1;
        }
    }
    let entries = Object.entries(wordRepetition);
    entries.sort((a,b) => Number(b[1]) - Number(a[1]));
   
    let test = Object.fromEntries(entries);
    for(let key in test){
        console.log(`${key} -> ${test[key]} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);