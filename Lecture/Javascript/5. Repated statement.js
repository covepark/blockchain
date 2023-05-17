//반복문
//반복문은 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행하고 다시 반복하여 검사할 때, 조건식이 참인 경우 코드 블록을 다시 실행. 이는 조건식이 거짓일 때 까지 반복하는 구문

//for 문
for(var i=0;i<2;i++){
    console.log(i);
}

for(var i=1; i<=6; i++){
    for(var j=1;j<=6;j++){
        console.log(`${i},${j}`);
    }
}

//while문
var count = 0;

while(count <3){
    console.log(count);
    count++;
} //0 1 2

//do...while문
var count =0;

do{
    console.log(count);
    count++;
} while(count <3); //0 1 2
 
//break문
var string = "Hello World";
var index;

//문자열은 유사배열이므로 for문으로 순회할 수 있다.
for(var i =0; i<string.length; i++){
    //문자열의 개별문자가 'l'이면
    if(string[i]==='l'){
        index =i;
        break; //반복문을 탈출한다
    }
}

console.log(index); //2

//continue문
var string = "Hello World";
var count = 0;

//문자열은 유사배열이므로 for문으로 순회할 수 있다.
for(var i =0; i<string.length; i++){
    //'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if(string[i] !=='l') continue;
    count++; //continue문이 실행되면 이 문은 실행되지 않는다.
    }

console.log(count); //3