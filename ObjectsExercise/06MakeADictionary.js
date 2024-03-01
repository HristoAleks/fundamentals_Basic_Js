function solve(arr){
    let dictionary = [];
    for(let el of arr){
        let parsedObj = JSON.parse(el);
        let arrFromObj = Object.entries(parsedObj);
        //console.log(arrFromObj);
        for(let el of arrFromObj){
            let test = dictionary.find(x => x.term == el[0])
            if(test){
                test.description = el[1];
            }else{
                let objToPush = {term:el[0],description:el[1]};
                dictionary.push(objToPush);
            }
        }
    }
    dictionary.sort((a , b) => a.term.localeCompare(b.term));
    //console.log(dictionary);
    for(let ch of dictionary){
        let entries = Object.entries(ch);
        console.log(`Term: ${entries[0][1]} => Definition: ${entries[1][1]}`);
    }
        
}

// solve([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]
//     )

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )