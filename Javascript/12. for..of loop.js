//ES6 이전 기존 JS
let list = [1,2,3,4]

for(let value of list) { //배열의 각각의 값을 접근하기 위해 for..of 사용
    console.log(value);
}

for(let char of 'hello'){
    console.log(char);
}

//DOM
<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>

const nodes = document.querySelectorAll("li");

for(const node of nodes){
    console.log(node.textContent); //First, Second, Thrid
}

//Object
const animals = {
    lion: "사자",
    tiger: "호랑이"
};

const keys = Object.keys(animals); //Object.keys를 활용하면 Object에서 property key로 배열 변환. 개별 key값을 배열로 반환

for(let key of keys){
    console.log(key, animals[key]);
}