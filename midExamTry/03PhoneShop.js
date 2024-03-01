function solve(arr){
    let phoneList = arr.shift().split(", ");
    //console.log(phoneList);

    for(let el of arr){
        let infoArr = el.split(" - ");
        let command = infoArr[0];
        let phone = infoArr[1];
        if(command == "Add" && !phoneList.includes(phone)){
            phoneList.push(phone);
        }else if(command == "Remove" && phoneList.includes(phone)){
            let indexToRemove = phoneList.indexOf(phone);
            phoneList.splice(indexToRemove,1);
        }else if(command == "Bonus phone"){
            let [oldPhone,newPhone] = phone.split(":") ;

            if(phoneList.includes(oldPhone)){
                let curIndex = phoneList.indexOf(oldPhone);
                phoneList.splice(curIndex + 1, 0, newPhone);
            }
        }else if(command == "Last" && phoneList.includes(phone)){
            let curIndex = phoneList.indexOf(phone);
            phoneList.splice(curIndex, 1);
            phoneList.push(phone);
        }
        if(command == "End"){
            break;
        }
        //console.log(infoArr);
    }
    console.log(phoneList.join(", "));
}

solve(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]);

solve(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])
;

solve(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])
;