function solve(arr){
    let list = arr.shift().split("!");
    //console.log(list);
    for(let el of arr){
        let infoArr = el.split(" ")
        let command = infoArr.shift();
        if(command == "Urgent" && !(list.includes(infoArr[0]))){
            list.unshift(infoArr[0]);
        }else if(command == "Unnecessary" && list.includes(infoArr[0])){
            let index = list.indexOf(infoArr[0]);
            list.splice(index,1);
        }else if(command == "Correct" && list.includes(infoArr[0])){
            let index = list.indexOf(infoArr[0]);
            list.splice(index + 1, 0);
            list.splice(index, 1, infoArr[1]);
        }else if(command == "Rearrange" && list.includes(infoArr[0])){
            let index = list.indexOf(infoArr[0]);
            list.splice(index , 1);
            list.push(infoArr[0]);
        }
    }
    console.log(list.join(", "));
}

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

