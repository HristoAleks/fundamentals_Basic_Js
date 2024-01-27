function solve(info){
    let person = JSON.parse(info);
    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`);
    }
}

solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');