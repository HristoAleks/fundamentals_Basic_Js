function solve(arr){
    let words = {};
    let searchedWords = arr.shift().split(" ");
    for(let el of searchedWords){
        words[el] = 0;
    }
    
    for(let word of arr){
        if(word in words){
            words[word] += 1;
        }
    }
    let entries = Object.entries(words);
    entries.sort((a,b) => b[1] - a[1]);
    
    for(let entrie of entries){
        console.log(`${entrie[0]} - ${entrie[1]}`);

    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );