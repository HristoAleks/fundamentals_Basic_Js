function solve(arrNum,arrComs){
    let flag = false;
    for(let el of arrComs){
        let arrInfo = el.split(" ");
        let opperation = arrInfo.shift();
        if(opperation == "add"){
            add(arrInfo);
        }else if(opperation == "addMany"){
            addMany(arrInfo);
        }else if(opperation == "contains"){
            contains(arrInfo);
        }else if(opperation == "remove"){
            remove(arrInfo);
        }else if(opperation == "shift"){
            shift(arrInfo);
        }else if(opperation == "sumPairs"){
            sumPairs(arrInfo);
        }else if(opperation == "print"){
            //console.log(arrNum);
            flag = true;
            break;
        }

    }
    if(flag){
        console.log(`[ ${arrNum.join(", ")} ]`);
    }
    function add(infoArr){
        let [index, el] = infoArr;//switch to arr
        index = Number(index);
        el = Number(el);
        if(index > arrNum.length - 1){
            arrNum[index] = el;
        }else{
            arrNum.splice(index, 0 , el);
        }
        //console.log(arr);
    }

    function addMany(arr){
        //let arrNum = [1, 1, 1, 1, 1, 1];
        let index = Number(arr.shift());
        
        for(let i = arr.length - 1; i >= 0; i--){
            let ch = Number(arr[i]);
            arrNum.splice(index, 0 , ch);
        }
    }

    function contains(arr){
        //let arrNum = [1, 2, 4, 5, 6, 7];
        let  el = arr;
        el = Number(el);
        console.log(arrNum.indexOf(el));
    }
    function remove(arr){
        //let arrNum = [1, 2, 4, 5, 6, 7];
        let index = arr;//replace with infroArr
        index = Number(index);
        arrNum.splice(index,1);
        
    }
    // function shift(arr){
    //     //let arrNum = [1, 2, 3, 4, 5];
    //     let pos = arr;//replace with infoArr
    //     pos = Number(pos);
    //     let copyArr = arrNum.slice(0,pos);
    //     arrNum.splice(0,pos);
    //     for(let el of copyArr){
    //         arrNum.push(el);
    //     }
        
    // }

    function shift(arr){
        //let arrNum = [1, 2, 3, 4, 5];
        let pos = arr;
        for(let i = 0; i < pos; i++){
            let num = arrNum.shift();
            arrNum.push(num);
        }
    }

    function sumPairs(arr){
        //let arrNum = [1, 2, 4, 5, 6, 7, 8];
        let test = [];
        for(let i = 0; i < arrNum.length; i+= 2){
            if(i == arrNum.length - 1){
                test.push(arrNum[i]);
            }else{
                let sum = arrNum[i] + arrNum[i+1];
                test.push(sum);
            }
        }
        arrNum = test;
    }
    

}

// solve([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     );

solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    );