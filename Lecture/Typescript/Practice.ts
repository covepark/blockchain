let count = 0; // 숫자
count += 1;
count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

messages.push(1); // 숫자 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
color = 'black'; // 에러 발생!

//TypeScript 를 사용하면 이렇게 특정 변수 또는 상수의 타입을 지정 할 수 있고 우리가 사전에 지정한 타입이 아닌 값이 설정 될 때 바로 에러를 발생시킵니다.

//###################################################################################################
//함수에서 타입 정의
function sum(x: number, y: number): number {
    return x + y;
}
  
sum(1, 2);

//숫자 배열의 총합을 구하는 함수
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}
  
const total = sumArray([1, 2, 3, 4, 5]);

// 참고로 함수에서 만약 아무것도 반환하지 않아야 한다면 이를 반환 타입을 void 로 설정하면 됩니다.
function returnNothing(): void {
    console.log('I am just saying hello world');
}


//###################################################################################################
//interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법입니다.
//Shape 라는 interface 를 선언합니다.
interface Shape {
    getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}
  
class Circle implements Shape {
// `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
  
    radius: number; // 멤버 변수 radius 값을 설정합니다.
  
    //constructor(public radius: number) {

    constructor(radius: number) {
      this.radius = radius;
    }
  
    // 너비를 가져오는 함수를 구현합니다.
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}


//constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용하면 직접 하나하나 설정해주는 작업을 생략해줄 수 있습니다.
//public 으로 선언된 값은 클래스 외부에서 조회 할 수 있으며 private으로 선언된 값은 클래스 내부에서만 조회 할 수 있습니다.
class Rectangle implements Shape {
    width: number;
    height: number;

    //constructor(private width: number, private height: number) {
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

//private으로 선언된 값은 클래스 내부에서만 조회 할 수 있습니다. 따라서 위 코드에서는 circle 의 radius 값은 클래스 외부에서 조회 할 수 있지만, rectangle 의 width 또는 height 값은 클래스 외부에서 조회 할 수 없습니다.
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
  
shapes.forEach(shape => {
    console.log(shape.getArea());
});
  

//###################################################################################################
interface Person {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

interface Developer {
name: string;
age2?: number;
skills: string[];
}
  
const person0: Person = {
    name: '김사람',
    age: 20
};
  
const expert0: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

//지금 보면 Person 과 Developer 가 형태가 유사하지요? 이럴 땐 interface 를 선언 할 때 다른 interface 를 extends 키워드를 사용해서 상속받을 수 있습니다.
interface Person {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
  }

interface Developer extends Person {
    skills: string[];
}
  
const person3: Person = {
    name: '김사람',
    age: 20
};
  
const expert3: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};
  
const people: Person[] = [person3, expert3];



// Generics
// 제너릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type alias 를 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용
function merge(a: any, b: any): any {
    return {
      ...a,
      ...b
    };
  }

//결과가 any로 나옴. 즉, merged안에 무엇이 있는지 알 수 없다는 의미. 타입 추정 불가.
const merged = merge({ foo: 1 }, { bar: 1 });


function merge2<A, B>(a: A, b: B): A & B {
    return {
      ...a,
      ...b
    };
  }

const merged2 = merge({ foo: 1 }, { bar: 1 });
  
  function wrap<T>(param: T) {
    return {
      param
    }
  }
  
const wrapped = wrap(10);

