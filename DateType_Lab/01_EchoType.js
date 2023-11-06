function demo(com){
    let type = typeof com
    console.log(type) ;
    if(type == "number" || type == "string"){
        console.log(com);
    }else{
         console.log("Parameter is not suitable for printing");
    }
}

demo('Hello, JavaScript!')