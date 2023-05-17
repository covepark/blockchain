//화살표 함수
//화살표 함수(Arrow function)는 function 키워드 대신 화살표(=>)를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다.

var calculateVolume = function(a,b,c,){
    var volume = a*b*c;
    return volume;
}

let calculateVolume = (a,b,c) => {
    let volume = a*b*c;
    return volume;
}

var result = calculateVolume(1,2,3);
console.log(result); //6

let result = calculateVolume(1,2,3);
console.log(result); //6

//중괄호, return, 파라미터 하나일 경우 소괄호, 파라미터 없을 경우 파라미터 생략 가능
let calculateVolume = (a,b,c) => a*b*c;
let calculate = value => vaule + 10;
let func = () => 1+2;