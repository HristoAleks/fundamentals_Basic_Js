function solve(arr){
    class Cats {
        constructor(name,age){
            this.name = name;
            this.age = age;

        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let catArr = [];
    for(let el of arr){
        let catsArr = el.split(" ");
        let name = catsArr[0];
        let age = Number(catsArr[1]);
        catArr.push(new Cats(name, age))
    }
    
    for(let el of catArr){
        el.meow(el);
    }

    
}

solve(['Mellow 2', 'Tom 5']);