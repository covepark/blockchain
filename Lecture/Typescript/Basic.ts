//변수에 타입설정
let str: string = 'hi';
let num: number = 100;

let arr: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

let obj: object = {};
let obj2: { name: string, age: number} = {
    name: 'hoho',
    age: 22
};

//함수에 타입설정
function add(a: number, b: number): number {
    return a+b;
    }
    //옵셔널 파라미터
    function log(a: string, b?: string, c?: string) {
        console.log(a);
    }

//기본 타입 중 자바스크립트에 존재하지 않는 타입
//#튜플(Tuple)
var arr1: [string, number] = ['aa', 100];


//#Enum
//Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입입니다. 값의 종류가 일정한 범위로 정해져 있는 경우에 유용합니다. 기본적으로 0부터 시작하며 값은 1씩 증가합니다.
enum Shoes {
    Nike = '나이키',
    Adidas= '아디다스'
    }
    
//#Any
//- 모든 데이터 타입을 허용합니다.

//#Void
//- 변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입입니다.

//#Never
//- 특정 값이 절대 발생할 수 없을 때 사용합니다.


//#인터페이스
//인터페이스는 타입을 정의한 규칙을 의미합니다.
interface User {
age: number;
name: string;
}

//인터페이스 활용
var person: User = {
    age: 30,
    name: 'aa'
}

//인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

//#인덱싱
interface StringArray {
    [index: number]: string;
}

var arr3: StringArray = ['a', 'b', 'c'];
arr3[0] = 10; //Error;


//#딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj4: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: 'a' //Error
}

obj['cssFile'] = /\.css$/;
obj['jsFile'] = 'a' //Error

//#인터페이스 확장
interface Person{
    name: string;
    age: number;
}

interface User extends Person{
    language: string;
}


//#오퍼레이터
//#Union 타입: 자바스크립트의 OR 연산자와 같은 의미의 타입입니다. Union 타입으로 지정하면 각 타입의 공통된(보장된) 속성에만 접근 가능합니다.
function askSomeone(someone: Developer2 | Person) {
    console.log(someone);
}

//#Intersection 타입: 자바스크립트의 AND 연산자와 같은 의미의 타입입니다. 각각의 모든 타입이 포함된 객체를 넘기지 않으면 에러가 발생합니다.
function askSomeone2(someone: Developer & Person) {
    console.log(someone);
}


//#제네릭
//- 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다. 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미합니다.
function logText <T> (text: T):T {
    return text;
}

logText<string>('aa');
logText<number>(100);


//#타입 추론
//- 타입 추론이란 타입스크립트가 코드를 해석하는 과정을 뜻합니다.
//- 해당 코드는 a 변수를 Boolean 타입으로 추론했기 때문에 Number타입을 할당하면 에러가 발생합니다.
var a = true;
a = 100; //Error


//- 가장 적절한 타입(Best Common Type): 배열에 담긴 값들을 추론하여 Union타입으로 묶어 나가는 것을 말합니다.
//- Typescript는 해당 코드의 타입을 Number | Boolean 으로 정의합니다.
var arr4 = [1, 2, true];


//인터페이스와 제네릭을 이용한 타입 추론 방식
interface Dropdown<T>{
    value: T,
    text: 'String'
};

var items: Dropdown<boolean> {
    value: true,
    text: 'aa'
}

//타입 단언
//타입 단언이란 타입스크립트가 해석하는 것보다 더 확실한 목적을 가지고 개발자가 해당 코드에 타입을 직접 지정하는 것을 의미합니다.
var a2;
a2 = 10;
a2 = 'string';
var b = a2 as string;

//#Dom API 조작에서 많이 사용합니다.
//- 타입추론시 HTMLDivElementㅣnull로 반환
var div = document.querySelector('div') as HTMLDivElement;
div.innerText;

//위의 타입 단언으로 null을 대비한 분기문을 작성하지 않아도 됩니다.

//#타입 호환
//- 타입 호환이란 특정 타입이 다른 타입에 잘 호환되는지를 의미합니다.

//구조적 타이핑: 코드 구조 관점에서 타입이 서로 호환되는지를 판단하는 것입니다. 구조적으로 더 큰 타입은 작은 타입을 호환할 수 없습니다.
interface Developer {
    name: string;
    age: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person2: Person;

developer = person; //Error
person2 = developer;