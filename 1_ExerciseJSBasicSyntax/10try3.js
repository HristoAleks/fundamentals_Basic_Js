function demo(foundation,step){
    let sumStone = 0;
    let sumMarble = 0;
    let sumLapis = 0;
    let gold = 0;
    let counter = 0;
    let height = 0;

    for(let i = foundation; i > 0; i -=2){
        let stone = 0;
        let marble = 0;
        let lapis = 0;
        counter++;
        height += step
        let base = Math.pow(i,2)*step;
        if(i- 2 <= 0){
            gold = Math.pow(i, 2)*step;
        }else if(counter == 5){
            counter = 0;
            stone = Math.pow(i - 2,2)*step;
            sumStone += stone;
            lapis = base - stone;
            sumLapis += lapis
        }else{
            stone = Math.pow(i - 2,2)*step;
            sumStone += stone;
            marble = base - stone;
            sumMarble += marble;
        }
    }
    console.log(`Stone required: ${Math.ceil(sumStone)}`);
    console.log(`Marble required: ${Math.ceil(sumMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(sumLapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

demo(11,0.75);