function demo(str,char,resault){
    let res = str.replace("_", char);
    console.log(`${res == resault? "Matched": "Not matched"}`);
}

demo('Str_ng', 'I', 'Strong')