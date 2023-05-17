//상수와 변수를 구분할 수 있는 let과 const 추가
//let은 변수, const는 상수.
//let과 const는 블록스코프 변수 블록안에서만 접근 가능하고, 블록 밖에서는 접근 불가능함.

const arr = [1,2,3]

const PI = 3.14;
PI = 3.15; //에러발생

//블록 레벨/함수 레벨 스코프
function test() {
    if(true){
        var b =1;
        let c =2; //블록 안에서만 접근 가능한 블록 레벨 변수
    }
    console.log(b); //1 출력
    console.log(c); //블록스코프 변수 이므로 reference error 발생. scope안에서는 c가 정의가 되지 않았기 때문. 블록 안에서만 접근 가능.
}

//let
function test2(){
    let name = 'Test Name';
    name = 'Test Name2';

    let name = 'Test name3' //let의 경우 한 스코프에서 같은 이름의 변수를 선언할 수 없음. Syntax Error 발생
}

let a =1, b=2, c; //여러 개의 변수는 콤마로 연속해서 선언 가능

//let & var
var car ="자동차";
console.log(this.car) //this를 참조할 경우네는 window 오브젝트를 참조하기 떄문에 이에 접근을 할 수 있음.출력:자동차

let bus = "버스";
console.log(this.bus); //let의 경우에는 그렇지 않다. this라는 형태로 버스를 참조하려고 하면 출력:undefined

