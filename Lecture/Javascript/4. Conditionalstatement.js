//블록(block)문

{
    var foo = 10;
    console.log(foo);
}

//제어문
var x = 0;
while(x<10){
    x++;
}
console.log(x); //10

//함수 선언문
function sum(x,y){
    return x+y;
}
console.log(sum(1,2)); //3

//조건문(conditional statement)
//조건문은 주어진 조건식(contitional expression)의 평가 결과에 따라 코드 블럭(블럭문)의 실행을 결정. 조건식은 불리언 값으로 평가될 수 있는 표현식.
//if..else문
if(num>0){
    kind ='양수';
} else if(num <0){
    kind ='음수';
} else {
    kind = '영';
}

//switch문
switch(area){
    case 1:
        monthName = 'Seoul';
    case 2:
        monthName = 'Busan';
    default:
        monthName = 'Jeju';
}

