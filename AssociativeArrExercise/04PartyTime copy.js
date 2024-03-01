function solve(arr){
    let listOfGuests = arr.slice(0,arr.indexOf("PARTY"));
    let comingGuests = arr.slice(arr.indexOf("PARTY") + 1);
    let vips = [];
    let noneVips = [];
    for(let guest of listOfGuests){
        if(!isNaN(guest[0])){
            vips.push(guest);
        }else{
            noneVips.push(guest);
        }
    };
    vips.sort();
    //noneVips.sort();
    vips.push(...noneVips)
    for(let currGuest of comingGuests){
        if(vips.includes(currGuest)){
            let index = vips.indexOf(currGuest);
            vips.splice(index, 1);
        }

    }
    // console.log(noneVips);
    // console.log("-------");
    console.log(vips.length + "\n" + vips.join("\n"));

    
}

solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);

solve(['m8rfQBvl',
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
]
)