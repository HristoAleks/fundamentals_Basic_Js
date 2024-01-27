function solve(arr){
    let obj = {

    };
    for(let el of arr){
        let name = el;
        let personalNumber = el.length;
        obj.name = name;
        obj.personalNumber = personalNumber;
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }
    
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );