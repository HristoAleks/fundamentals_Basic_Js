function demo(input){
    let username = input[0];
    let index = 1;
    let incomingPw = input[index];
    index++
    //console.log(username.length);
    let password = ""
    let block = 0;

    for(let i = username.length-1; i >= 0; i--){
        let ch = username[i]
        password += ch;
        //console.log(password);
    }
    
    while(incomingPw !== password){
        block++;
        if(block >= 4){            
            break;
        }else{
            console.log(`Incorrect password. Try again.`);
        }
        incomingPw = input[index];
        index++;
    }
    if(block >= 4){
        console.log(`User ${username} blocked!`);
    }else{
        console.log(`User ${username} logged in.`);
    }
 }

demo(['sunny','rainy','cloudy','sunny','not sunny'])