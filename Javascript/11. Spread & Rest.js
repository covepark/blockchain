//ES6부터 추가
//Spread
function test(a,b) {
    return a+b;
}

const data = [1,2];
//기존의 배열의 값을 인자로 넘기기 위해서는 꽤나 복잡한 방법을 사용했어야 했음. 그러나 Spread를 통해 배열 값을 인자로 치환하여 간단하게 넘길 수 있음.
const result = test(...data); //Spread. 여러개의 인자를 심플하게 넘길수 있음. 1 ->a, 2-> b
console.log(result); //3

const data1 = [1,2];
const data2 = [3,4];
const result1 = [0, ...data1, ...data2, 5];
console.log(result1); //[0,1,2,3,4,5]
console.log(result1.length); //6

const result2 = [..."abcde"]; //문자를 배열로 만들기 위함.
console.log(result2); ///["a","b","c","d","e"]

//Rest
function test(a,b, ...arr) { //Rest. 함수 마지막 파라미터에 ...을 붙이는 것
    console.log(arr);
}

test(1,2,3,4,5); // [3,4,5] 출력