function solve(input){
    let phoneBook = {};
    for(let el of input){
        let [name, phoneNumber] = el.split(" ");
        //phoneNumber = Number(phoneNumber);
        phoneBook[name] = phoneNumber;
        
    }
    for(let key in phoneBook){
        console.log(key + " -> " + phoneBook[key]);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);