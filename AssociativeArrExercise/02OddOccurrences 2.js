function solve(str){
    let obj = new Map();
    let arr = str.split(" ");
    
    for(let el of arr){

        let token = el.toLowerCase();
        if(obj.has(token)){
            let currNum = obj.get(token);
            let newNum = currNum += 1;
            obj.set(token, newNum);
        }else{
            obj.set(token, +1);
        }
    }
    let ans = ""
    for(let ch of obj){
        if(ch[1] % 2 != 0){
            ans += ch[0] + " ";
        }
    }
    console.log(ans);
}

solve('Cake IS SWEET is Soft CAKE sweet Food');