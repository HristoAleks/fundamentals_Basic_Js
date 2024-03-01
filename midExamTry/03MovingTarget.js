function solve(arr){
    let field = arr
                .shift()
                .split(" ")
                .map(Number);
    console.log(field);
    for(let el of arr){
        let infoArr = el.split(" ");
        let command = infoArr[0];
        let index = Number(infoArr[1]);
        let toDo = Number(infoArr[2]);

        if( command == "Shoot" && field[index] ){
            let checkIfAboveZero = field[index] - toDo;
            field[index] -= toDo;
            
            if(checkIfAboveZero <= 0){
                field.splice(index ,1);
            }
        }else if(command == "Add"){
            if(field[index]){
                field.splice(index, 0, toDo);
            }else{
                console.log("Invalid placement!");
            }
        }else if(command == "Strike"){
            if(index - toDo < 0 || index + toDo >= field.length){
                console.log("Strike missed!");
            }else{
                let beginingIndex = index - toDo;
                let endIndex = 1 + 2*toDo;
                
                field.splice(beginingIndex, endIndex);
            }
        }else if(command == "End"){
            console.log(field.join("|"));
            break;
        }
        
    }

}

// solve(["52 74 23 44 96 110",
// "Shoot 5 10",
// "Shoot 1 80",
// "Strike 2 1",
// "Add 22 3","End"]);

solve(["1 2  4",
"Strike 1 1",
"Add 3 2","End"]);

// solve(["1 2 3 4 5",
// "Strike 0 1",
// "End"]);

