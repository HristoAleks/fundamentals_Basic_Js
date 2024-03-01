function solve(str,start,count){
    let end = start + count
    let res = str.substring(start,end);
    console.log(res);
}

solve('ASentence', 2, 3);
solve('SkipWord', 4, 7);