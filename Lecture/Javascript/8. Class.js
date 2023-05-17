function Animal(name){
    this.name = name;
}

Animal.prototype.getName = function() {
    return this.name;
}

var lion = new Animal("lion");
console.log(lion.getName()); ///lion


//ES6에서는 class 추가. 생성자와 상속을 좀 더 명확히 구분할 수 있도록 함. 
class Animal{
    constructor(name){
        this.name = name;
        this.type = "animal";
    }
    getName() {
        return this.name;
    }
}

let animal = new Animal("lion");
console.log(animal.getName()); // lion
console.log(typeof Animal);

//상속
class Lion extends Animal{ //extends로 Animal 상속받음
    constructor(name){ //constructor를 통해 생성자 정의
        super(name); //부모 class에 대한 생성자 호출 시 super 이용. 부모 생성자에 name 변수 전달.
        this.type= "lion";
    }
}

let lion = new Lion("king");
console.log(lion instanceof Animal); //true, Animal의 instanceof임.
console.log(lion.getName()); //king