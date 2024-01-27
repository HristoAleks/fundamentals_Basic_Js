function solve(){
    class Person{
        constructor(name,age){
            //let this = {};
            this.name = name;
            this.age = age;
            //return this
        }
        saysHello(){
            console.log(`${this.name} says Hello!`);
        }
    }
    let myPerson = new Person('Bob',32);
    let george = new Person("George", 33);
    console.log(myPerson, george);

    george.saysHello();
}

solve();