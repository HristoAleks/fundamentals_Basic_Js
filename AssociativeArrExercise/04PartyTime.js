function solve(arr){
    let guestList = arr.slice(0, arr.indexOf("PARTY"));
    let incomingGuests = arr.slice(arr.indexOf("PARTY") + 1);
    let notGoing = {};
    
    let count = 0;
    for(let guest of guestList){
        if(!incomingGuests.includes(guest)){
            count++;
            notGoing[guest] = guest.toLowerCase();
        }
    }
    
    let values = Object.values(notGoing).sort();
    console.log(count);
    for( let key in notGoing){
        console.log(key);
    }
    //console.log(notGoing.sort().join("\n"));
    
}

solve(['m8rfQBvl',
'5xCVD56K',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);

solve(['SVQXQCbc', '7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE'])