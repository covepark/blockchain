let arr = [1,2,3,4];
let [a,b,c,d] = arr;

let arr = [1,2,3];
let [a,b,c,d] = arr; // 1 2 3 undefined

let [a, , c] = [1,2,3]; //값 건너뛰기 가능
console.log(a, c); // 1 3

const obj ={
    name: 'Nick',
    age: '31',
    job: 'Software engineer'
}

let {name, age, job} = obj;
console.log(name, age, job); //Nick, 31, software engineer

let arr = [0, 1, 2];
let [a=1, b, c=3, d=4] = arr; //a=0, b=1, c=2, d=4의 결과.

