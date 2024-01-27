function solve(arr){
    class Songs{
        constructor(name){
            // this.typeList = typeList;
            this.name = name;
            // this.time = time;
        }
        printSongName(){
            console.log(this.name);
        }
    }
    let songNum = arr.shift();
    let list = arr.pop()
    for(let el of arr){
        let infoArr = el.split("_");
        let [theAlbum,songName,songTime] = infoArr;
        if(theAlbum == list ){
            let toSongs = new Songs(songName);
            toSongs.printSongName();
        }else if(list == "all" ){
            let toSongs = new Songs(songName);
            toSongs.printSongName()
        }
    }
    
}

// solve([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
//     );

solve(['2',
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])