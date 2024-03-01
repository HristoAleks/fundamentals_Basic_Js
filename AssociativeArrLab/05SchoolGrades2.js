function solve(arr) {
  let book = {};
  for (let el of arr) {
    let infoArr = el.split(" ");
    let name = infoArr.shift();

    for (let num of infoArr) {
      num = Number(num);

      if (name in book) {
        book[name].push(num);
      } else {
        let arrOfGrades = [];
        arrOfGrades.push(num);
        book[name] = arrOfGrades;
      }
    }
  }

  for (let key in book) {
    let sumOfGrades = 0;
    for (let num of book[key]) {
      sumOfGrades += num;
    }

    let avg = sumOfGrades / book[key].length;
    book[key] = avg.toFixed(2);
  }
  let entries = Object.entries(book);
  entries.sort((a,b) => a[0].localeCompare(b[0]));
  //console.log(entries);
  for(let ch of entries){
    console.log(`${ch[0]}: ${ch[1]}`);
  }


  //console.log(book);
}
solve(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
