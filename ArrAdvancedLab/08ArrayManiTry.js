function solve(arr){
    let curArr = arr
                .shift()
                .split(" ")
                .map(Number);

    // let test = {
    //     "Add": add(num),
    //     "Remove": remove(num),
    //     "RemoveAt": removeAt(index),
    //     "Insert": insert(num,index)
    // }

    for(let i = 0; i < arr.length; i++){
        let [command, firstNum, secondNum] = arr[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        let test = {
            "Add": add(num),
            "Remove": remove(num),
            "RemoveAt": removeAt(index),
            "Insert": insert(num,index)
        }

    }
    console.log(curArr.join(" "));
    function add(num){
        curArr.push(num);
    }

    function remove(num){
        curArr = curArr.filter(el => el !== num);
    }
    function removeAt(index){
        curArr.splice(index,1);
    }

    function insert(num, index){
        curArr.splice(index, 0, num);
    }

}

solve(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);
solve(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);