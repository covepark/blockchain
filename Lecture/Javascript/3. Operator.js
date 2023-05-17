//연산자
//연산자(Operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다.

//이항 산술 연산자
//이항 산술 연산자는 2개의 피연산자를 대상으로 연산하여 숫자 타입의 값을 만든다.
6+2 //8
6-2 //4
6*2 //12
6/2 //3
6%2 //0

//단항 산술 연산자
var x =5, result = 0;

result = x++;
console.log(result, x); //5 6

result = ++x;
console.log(result, x); //7 7

result = x--;
console.log(result, x); //7 6

result = --x;
console.log(result, x); //5 5

//문자열 연결 연산자: 하나 이상이 문자열인 경우 문자열 연결로 동작함.
'1'+'2' //'12'
'1'+2 //'12'

//할당 연산자
var x;

x = 1; //1
x += 5; //6
x -= 5; //1
x *=5; //5
x /= 5; //1
x %= 5; //1

var str ='Hello ';
str += 'World'; //Hello World

//비교 연산자

5 ==5 //true
5 === 5 //true
5 === '5'//false

5 !==8 //true

5 > 0 //ture
5 < 0 //false

//삼항 조건 연산자
//조건식 ?
//조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값
var x =4;
var result = x % 2 ? '홀' : '짝';

console.log(result); //짝

//논리연산자
//논리합(||) 연산자
true || true //true
true || false // true
false || true //true
false || false // false

//논리곱(&&) 연산자
true && true //true
true && false // false
false && true //false
false && false // false

//논리 부정(!) 연산자
!true //false
!false //true