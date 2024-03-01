function solve(str){
    let points = {
        shards: 0,
        fragments: 0,
        motes: 0
    }

    let legenderies = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    }

    let junk = {};
    let arr = str.split(" ");
    //console.log(arr);
    //let flag = false;

    for(let i = 0; i < arr.length; i+= 2){
        let qnty = Number(arr[i]);
        let material = arr[i+1].toLowerCase();
        if(material in points){
            points[material] += qnty;
            
            if(points[material] >= 250){
                //to do break and print stuff
                points[material] -= 250;
                console.log(`${legenderies[material]} obtained!`);
                print(junk,points);
                break;
            }
        }else{
            if(material in junk){
                junk[material] += qnty;
            }else{
                junk[material] = qnty;
            }
        }
        

    }
    function print(junk,points){
        let entriesPoints = Object.entries(points).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        let entriesJunk = Object.entries(junk).sort((a,b) => a[0].localeCompare(b[0]));
        for(let [name,amount] of entriesPoints){
            console.log(`${name}: ${amount}`);
        }
        for(let [name,amount] of entriesJunk){
            console.log(`${name}: ${amount}`);
        }
    }
    
    
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');