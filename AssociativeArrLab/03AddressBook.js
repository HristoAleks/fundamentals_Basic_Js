function solve(arr){
    let addressBook = {};
    for(let el of arr){
        let [name, address] = el.split(":");
        addressBook[name] = address;
        
    }
    let entries = Object.entries(addressBook);
    
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    
    let finalBook = Object.fromEntries(entries);
    for(let name in finalBook){
        console.log(`${name} -> ${finalBook[name]}`);
    }
    
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);