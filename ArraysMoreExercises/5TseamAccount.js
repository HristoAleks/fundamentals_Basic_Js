function demo(arr){
    let arrGames = arr[0].split(" ");
    for(let i = 1; i < arr.length; i++){
        if(arr[i] == "Play!"){
            break;
        }
        
        let infoArr = arr[i].split(" ");
        let action = infoArr[0];
        let game = infoArr[1];

        if(action == "Install" && !(arrGames.includes(game))){
            arrGames.push(game);
        }else if(action == "Uninstall" && arrGames.includes(game)){
            let gameIndex = arrGames.indexOf(game);
            arrGames.splice(gameIndex, 1);
        }else if(action == "Update" && arrGames.includes(game)){
            let gameIndex = arrGames.indexOf(game);
            arrGames.splice(gameIndex, 1);
            arrGames.push(game);
        }else if(action == "Expansion"){
            let arrGame = game.split("-");
            if(arrGames.includes(arrGame[0])){
                let gameIndex = arrGames.indexOf(arrGame[0]);
                arrGames.splice(gameIndex + 1, 0, (arrGame[0] +":" + arrGame[1]) );
            }
        }
    }
    console.log(arrGames.join(" "));
}

demo(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
);

demo(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);