function solve(str){
    let obj = {};
    let arr = str.split(" ");
    console.log(arr);
    for(let el of arr){

        let token = el.toLowerCase();
        if(token in obj){
            obj[token] += 1;
        }else{
            obj[token] = 1;
        }
    }

    let entries = Object.entries(obj);
    let finalObj = entries.filter((x) => (x[1] % 2 != 0));
    finalObj.sort((a,b) =>)
    let ans = "";
    for(let ch of finalObj){
        ans += ch[0] + " ";
    }
    console.log(ans);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');