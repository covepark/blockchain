//프로미스(Promise)
//프로미스(Promise)는 비동기 호출이 일어났을 때 또는 해당 태스크가 완료됐을 때, 이를 처리할 함수나 에러를 처리할 함수를 설정하는 모듈

function get(url) {
    return new Promise(function(resolve, reject){ //function안에 promise 생성자를 입력함으로써 promise 인스턴스 생성. execute callback 함수는 resolve와 reject를 가짐.
        //resolve: 성공시 메세지, reject: 실패시 메세지
        var req= new XMLHttpRequest(); //변수 생성
        req.open('GET', url); //GET 프로토콜로 request날림
        req.onload = () => {
            if(req.status == 200){
                resolve(req.response);
            }else{
                reject(Error(req.status)); //status가 200이 아닌경우 실패.
            }
        }
        req.onerror = function() { //error가 생겼을 경우에 마찬가지로 에러메시지 반환.
            reject(Error("Network Error"));
        };
        req.send(); //XMLHttpRequest 구성 프로토콜 전달.
    });
}

get('story.json').then(function(response){
    console.log("Success", response);
}, function(error){
    console.log("Failed", error);
})

Promise.all([promise1, promise2]).then( //promise1과 promise2를 순차적으로 완료했을 경우 then
    function(values){
        console.log("완료",values);
    });

Promise.all([promise1(), promise2()]).then(
    function(values){
        console.log("완료",values);
    });
    