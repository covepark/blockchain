function sayHello(){
    console.log('Hello');
}

function getHuman(callback){
    callback(); //함수를 호출하는 형태의 메서드
}

getHuman(sayHello) //getHuman 함수에서 sayHello를 호출. 'Hello'

//익명함수: 앞서와 같이 함수를 정의하는 것을 독립적으로 분리하는 것이 아니라 함수의 이름을 선언하지 않고 함수를 사용하는 것
getHuman(function(){
    console.log('나는 인간이다');
})

setTimeout(function(){
    console.log('3초 뒤에 실행됩니다!');
}, 3000)

setTimeout(function(){
    console.log('1초 마다 출력됩니다!');
}, 1000)

