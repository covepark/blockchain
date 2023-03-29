//배열
//배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용. 자바스크립트의 배열은 객체이며 다양한 내장 메소드를 포함하고 있다.
var arr =['apple','banana'];
console.log(arr[1]); //'banana'
console.log(arr.length); //2
console.log(typeof arr); //object

var arr = new Array(1,2);
console.log(arr); //[1,2]

//배열 요소의 추가와 삭제
var arr = [];
console.log(arr[0]); //undefined

arr[1] = 1;
arr[3] = 2;

console.log(arr); // (4) [empty, 1, empty, 2]
console.log(arr.length); //4

delete arr[1];
console.log(arr); // (4) [empty, empty, empty, 2]

arr.splice(3,1); //단순 데이터 삭제가 아닌 배열에서 없애고 싶다. 3이라는 index에 가서 1만큼 추출하라.
console.log(arr) // [empty, empty, empty]

//배열의 순회
const arr = [0,1,2,3];

for (let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}

for (const key in arr){
    console.log('key:' + key, 'value:'+ arr[key]);
}
arr.forEach((item,index) => console.log(index,item)); //foreach: 내장메소드, arr에 있는 item(데이터)과 index를 순회하며 출력하라.

//객체: 키와 값으로 구성된 property
var person = {name:'Will', gender: 'male'};

var person = new Object();
//프로퍼티 추가
person.name = 'Will';
person.gender = 'male';

console.log(person.gender); //'male'
console.log(person['gender']); // 'male'
console.log(person.age); // undefined

person['area'] = 'Seoul';
console.log(persone['area']); //Seoul

for (var prop in person){
    console.log(prop+':'+person[prop]);
}