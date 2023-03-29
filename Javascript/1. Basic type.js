var x; //변수 선언
x = 3;// 값의 할당

//데이터 타입
//원시 타입(primitive data type)
//boolean
//null
//undefined
//number
//string
//symbol

//객체 타입(oject/reference type)
//object

//Number : var로 타입이 하나만 존재함
var integer = 10 //정수
var double = 10.12 //실수
var negative = -20 //음의 정수
var hex = 0x41; //16진수

//String
var str = "string"; //큰 따옴표
str = 'string'; //작은 따옴표

//Boolean : 비어있는 문자열과 null, undefined, 숫자 0은 false로 간주된다.
var too = true;
var bar = false;

//Undefined : 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가진다. 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 undefined가 반환된다.
var foo;
console.log(foo); //undefined

//Null : 의도적으로 변수에 값이 없다는 것을 명시할 때 사용
var foo = "Hello";
foo = null;

//객체(Object)타입
var obj = {a:1, b:2}